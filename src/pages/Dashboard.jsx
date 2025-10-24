import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Componente de Gráfico de Barras
const BarChart = ({ data, title, color = 'primary' }) => {
  const maxValue = Math.max(...data.map(d => d.value), 1)
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-soft">
      <h3 className="font-bold text-lg mb-4 text-foreground">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-semibold text-foreground">{item.value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${
                  color === 'primary' ? 'from-primary to-primary-dark' : 
                  color === 'secondary' ? 'from-secondary to-secondary/80' :
                  'from-blue-500 to-blue-600'
                } rounded-full transition-all duration-500`}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Componente de Gráfico de Pizza
const PieChart = ({ data, title }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let currentAngle = -90
  
  const slices = data.map((item, index) => {
    const percentage = (item.value / total) * 100
    const angle = (percentage / 100) * 360
    const startAngle = currentAngle
    currentAngle += angle
    
    const colors = ['#8B4513', '#D2691E', '#CD853F', '#DEB887', '#F5DEB3']
    
    return {
      ...item,
      percentage: percentage.toFixed(1),
      color: colors[index % colors.length],
      startAngle,
      endAngle: currentAngle
    }
  })
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-soft">
      <h3 className="font-bold text-lg mb-4 text-foreground">{title}</h3>
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 200 200" className="transform -rotate-90">
            {slices.map((slice, index) => {
              const startAngle = (slice.startAngle * Math.PI) / 180
              const endAngle = (slice.endAngle * Math.PI) / 180
              const x1 = 100 + 80 * Math.cos(startAngle)
              const y1 = 100 + 80 * Math.sin(startAngle)
              const x2 = 100 + 80 * Math.cos(endAngle)
              const y2 = 100 + 80 * Math.sin(endAngle)
              const largeArc = slice.endAngle - slice.startAngle > 180 ? 1 : 0
              
              return (
                <path
                  key={index}
                  d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                  fill={slice.color}
                  stroke="white"
                  strokeWidth="2"
                />
              )
            })}
          </svg>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {slices.map((slice, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: slice.color }} />
              <span className="text-muted-foreground">{slice.label}</span>
            </div>
            <span className="font-semibold text-foreground">{slice.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Componente de Linha do Tempo
const TimelineChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map(d => d.value), 1)
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-soft">
      <h3 className="font-bold text-lg mb-4 text-foreground">{title}</h3>
      <div className="relative h-48">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#D2691E" />
            </linearGradient>
          </defs>
          {data.map((point, index) => {
            if (index === data.length - 1) return null
            const x1 = (index / (data.length - 1)) * 100
            const y1 = 100 - (point.value / maxValue) * 80
            const x2 = ((index + 1) / (data.length - 1)) * 100
            const y2 = 100 - (data[index + 1].value / maxValue) * 80
            
            return (
              <line
                key={index}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            )
          })}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100
            const y = 100 - (point.value / maxValue) * 80
            
            return (
              <circle
                key={index}
                cx={`${x}%`}
                cy={`${y}%`}
                r="5"
                fill="#8B4513"
                stroke="white"
                strokeWidth="2"
              />
            )
          })}
        </svg>
        <div className="flex justify-between mt-2">
          {data.map((point, index) => (
            <div key={index} className="text-xs text-muted-foreground text-center">
              <div className="font-semibold text-foreground">{point.value}</div>
              <div>{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submissions, setSubmissions] = useState([])
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()

  useEffect(() => {
    const auth = sessionStorage.getItem('dashboardAuth')
    if (auth === 'authenticated') {
      setIsAuthenticated(true)
      loadSubmissions()
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    
    if (username === 'igor' && password === 'igor22') {
      sessionStorage.setItem('dashboardAuth', 'authenticated')
      setIsAuthenticated(true)
      setError('')
      loadSubmissions()
    } else {
      setError('Usuário ou senha incorretos')
      setPassword('')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('dashboardAuth')
    setIsAuthenticated(false)
    setUsername('')
    setPassword('')
    navigate('/')
  }

  const loadSubmissions = async () => {
    try {
      const response = await fetch('/api/submissions')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data)
      }
    } catch (error) {
      console.error('Error loading submissions:', error)
    }
  }

  const exportToCSV = () => {
    const filtered = filter === 'all' ? submissions : submissions.filter(s => s.type === filter)
    
    if (filtered.length === 0) return

    const headers = Object.keys(filtered[0]).join(',')
    const rows = filtered.map(item => 
      Object.values(item).map(val => 
        typeof val === 'string' && val.includes(',') ? `"${val}"` : val
      ).join(',')
    )
    
    const csv = [headers, ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `submissions-${filter}-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  // Calcular dados para os gráficos
  const getChartData = () => {
    // 1. Submissões por tipo
    const typeData = [
      { label: 'Newsletter', value: submissions.filter(s => s.type === 'newsletter').length },
      { label: 'Contato', value: submissions.filter(s => s.type === 'contact').length }
    ]

    // 2. Submissões por dia (últimos 7 dias)
    const last7Days = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      const count = submissions.filter(s => s.timestamp && s.timestamp.startsWith(dateStr)).length
      last7Days.push({
        label: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
        value: count
      })
    }

    // 3. Interesse por serviço (formulários de contato)
    const interestMap = {}
    submissions.filter(s => s.type === 'contact' && s.interest).forEach(s => {
      interestMap[s.interest] = (interestMap[s.interest] || 0) + 1
    })
    const interestData = Object.entries(interestMap).map(([label, value]) => ({ label, value }))

    // 4. Taxa de conversão por hora do dia
    const hourMap = {}
    submissions.forEach(s => {
      if (s.timestamp) {
        const hour = new Date(s.timestamp).getHours()
        hourMap[hour] = (hourMap[hour] || 0) + 1
      }
    })
    const hourData = Object.entries(hourMap)
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .map(([hour, value]) => ({ label: `${hour}h`, value }))

    // 5. Crescimento mensal
    const monthMap = {}
    submissions.forEach(s => {
      if (s.timestamp) {
        const month = new Date(s.timestamp).toLocaleDateString('pt-BR', { month: 'short' })
        monthMap[month] = (monthMap[month] || 0) + 1
      }
    })
    const monthData = Object.entries(monthMap).map(([label, value]) => ({ label, value }))

    return { typeData, last7Days, interestData, hourData, monthData }
  }

  const chartData = getChartData()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-heading font-bold text-primary mb-2">
                Dashboard Admin
              </h1>
              <p className="text-muted-foreground">
                Estratégia Viva
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Usuário
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Digite seu usuário"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  const filteredSubmissions = filter === 'all' 
    ? submissions 
    : submissions.filter(s => s.type === filter)

  const stats = {
    total: submissions.length,
    newsletter: submissions.filter(s => s.type === 'newsletter').length,
    contact: submissions.filter(s => s.type === 'contact').length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold text-primary">
            Dashboard Admin
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm bg-gray-200 text-foreground rounded-lg hover:bg-gray-300 transition-colors"
          >
            Sair
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-soft">
            <div className="text-muted-foreground text-sm font-medium mb-1">
              Total de Submissões
            </div>
            <div className="text-3xl font-bold text-primary">
              {stats.total}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-soft">
            <div className="text-muted-foreground text-sm font-medium mb-1">
              Inscritos Newsletter
            </div>
            <div className="text-3xl font-bold text-secondary">
              {stats.newsletter}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-soft">
            <div className="text-muted-foreground text-sm font-medium mb-1">
              Formulários de Contato
            </div>
            <div className="text-3xl font-bold text-primary">
              {stats.contact}
            </div>
          </div>
        </div>

        {/* Gráficos de Análise */}
        <div className="mb-8">
          <h2 className="text-xl font-heading font-bold text-primary mb-4">
            Análises e Insights
          </h2>
          
          {/* Linha 1: 2 gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <PieChart 
              data={chartData.typeData}
              title="📊 Distribuição por Tipo"
            />
            <BarChart
              data={chartData.last7Days}
              title="📈 Submissões nos Últimos 7 Dias"
              color="primary"
            />
          </div>

          {/* Linha 2: 3 gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <BarChart
              data={chartData.interestData.slice(0, 5)}
              title="🎯 Top Serviços de Interesse"
              color="secondary"
            />
            <TimelineChart
              data={chartData.last7Days}
              title="📉 Tendência Semanal"
            />
            <BarChart
              data={chartData.hourData.slice(0, 5)}
              title="⏰ Horários com Mais Submissões"
              color="info"
            />
          </div>
        </div>

        {/* Filters and Export */}
        <div className="bg-white rounded-xl p-6 shadow-soft mb-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gray-100 text-foreground hover:bg-gray-200'
                }`}
              >
                Todos ({stats.total})
              </button>
              <button
                onClick={() => setFilter('newsletter')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'newsletter'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gray-100 text-foreground hover:bg-gray-200'
                }`}
              >
                Newsletter ({stats.newsletter})
              </button>
              <button
                onClick={() => setFilter('contact')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'contact'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gray-100 text-foreground hover:bg-gray-200'
                }`}
              >
                Contato ({stats.contact})
              </button>
            </div>
            
            <button
              onClick={exportToCSV}
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Exportar CSV
            </button>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Dados
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-6 py-8 text-center text-muted-foreground">
                      Nenhuma submissão encontrada
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map((submission, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                        {new Date(submission.timestamp).toLocaleString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          submission.type === 'newsletter'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {submission.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">
                        {submission.type === 'newsletter' ? (
                          <div>{submission.email}</div>
                        ) : (
                          <div className="space-y-1">
                            <div><strong>Nome:</strong> {submission.name}</div>
                            <div><strong>Email:</strong> {submission.email}</div>
                            {submission.phone && <div><strong>Telefone:</strong> {submission.phone}</div>}
                            {submission.company && <div><strong>Empresa:</strong> {submission.company}</div>}
                            {submission.message && <div><strong>Mensagem:</strong> {submission.message}</div>}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
