import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Filosofia from './pages/Filosofia'
import Jornadas from './pages/Jornadas'
import Produtos from './pages/Produtos'
import CasoDeSucesso from './pages/CasoDeSucesso'
import Insights from './pages/Insights'
import Contato from './pages/Contato'
import Dashboard from './pages/Dashboard'
import TransformacoesFracassam from './pages/articles/TransformacoesFracassam'
import DiagnosticoCultural from './pages/articles/DiagnosticoCultural'
import ArquetiposOrganizacionais from './pages/articles/ArquetiposOrganizacionais'
import GovernancaParticipativaPratica from './pages/articles/GovernancaParticipativaPratica'
import CustoCulturaToxica from './pages/articles/CustoCulturaToxica'
import EstruturasOrganizacionaisComparadas from './pages/articles/EstruturasOrganizacionaisComparadas'
import PoderDosRituaisOrganizacionais from './pages/articles/PoderDosRituaisOrganizacionais'
import MetricasVitalidadeOrganizacional from './pages/articles/MetricasVitalidadeOrganizacional'
import PropositoOperanteVsDecorativo from './pages/articles/PropositoOperanteVsDecorativo'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/jornadas/*" element={<Jornadas />} />
        <Route path="/produtos/*" element={<Produtos />} />
        <Route path="/caso-de-sucesso" element={<CasoDeSucesso />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/por-que-transformacoes-fracassam" element={<TransformacoesFracassam />} />
        <Route path="/insights/diagnostico-cultural-antropologico" element={<DiagnosticoCultural />} />
        <Route path="/insights/arquetipos-organizacionais" element={<ArquetiposOrganizacionais />} />
        <Route path="/insights/governanca-participativa-pratica" element={<GovernancaParticipativaPratica />} />
        <Route path="/insights/custo-cultura-toxica" element={<CustoCulturaToxica />} />
        <Route path="/insights/estruturas-organizacionais-comparadas" element={<EstruturasOrganizacionaisComparadas />} />
        <Route path="/insights/poder-dos-rituais-organizacionais" element={<PoderDosRituaisOrganizacionais />} />
        <Route path="/insights/metricas-vitalidade-organizacional" element={<MetricasVitalidadeOrganizacional />} />
        <Route path="/insights/proposito-operante-vs-decorativo" element={<PropositoOperanteVsDecorativo />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
      {/* <WhatsAppButton /> */}
    </Router>
  )
}

export default App
