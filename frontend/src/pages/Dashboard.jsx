// frontend/src/pages/Dashboard.jsx
import React, { useState } from 'react' // Adicionamos 'useState'
import './Dashboard.css' 

// --- MOCK DE CONTRATOS (MANTIDO) ---
const mockContratos = [
  { id: '1', codigo: '0092', nome: 'LOTUS' },
  { id: '2', codigo: '0705', nome: 'TG' },
  { id: '3', codigo: '0798', nome: 'E-DONA' },
  { id: '4', codigo: '0036', nome: 'FKN' },
]

// --- NOVO MOCK DE ORDENS DE SERVIÇO (OS) ---
const mockOSs = [
  // OSs para LOTUS (0092)
  { 
    os_number: '123456', 
    contrato_codigo: '0092', 
    descricao: 'Criação de novo conector', 
    status: 'Em Execução', 
    prioridade: 'Alta', 
    data_abertura: '2025-11-10' 
  },
  { 
    os_number: '123457', 
    contrato_codigo: '0092', 
    descricao: 'Atualização da base', 
    status: 'Concluída', 
    prioridade: 'Média', 
    data_abertura: '2025-11-05' 
  },
  
  // OSs para TG (0705)
  { 
    os_number: '200100', 
    contrato_codigo: '0705', 
    descricao: 'Instalação de certificado digital SSL', 
    status: 'Aguardando Aprovação', 
    prioridade: 'Alta', 
    data_abertura: '2025-11-18' 
  },
  
  // OSs para E-DONA (0798)
  { 
    os_number: '300550', 
    contrato_codigo: '0798', 
    descricao: 'Treinamento de equipe para novo módulo de estoque', 
    status: 'Agendada', 
    prioridade: 'Média', 
    data_abertura: '2025-11-15' 
  },
];


function Dashboard() {
  const [contratoSelecionado, setContratoSelecionado] = useState(null);

  // Filtra as OSs com base no código do contrato selecionado
  const osFiltradas = contratoSelecionado 
    ? mockOSs.filter(os => os.contrato_codigo === contratoSelecionado.codigo)
    : [];

  return (
    <div className="dashboard-container">
      <h1>Selecione o Contrato</h1>


      <div className="contratos-list">
        {mockContratos.map(contrato => (
          <div 
            key={contrato.id} 
            className={`contrato-card ${contratoSelecionado && contratoSelecionado.id === contrato.id ? 'card-selecionado' : ''}`}
            // Adiciona a função para selecionar o contrato ao clicar
            onClick={() => setContratoSelecionado(contrato)} 
          >
            <span className="contrato-code">{contrato.codigo}</span>
            <span className="contrato-name">{contrato.nome}</span>
            <div className="contrato-actions">
              <button className="button-main">
                Abrir OS
              </button>
              <button className="button-secondary">
                Ver Contrato
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="os-section-title">
        {contratoSelecionado 
          ? `Ordens de Serviço do Contrato ${contratoSelecionado.nome} (${contratoSelecionado.codigo})` 
          : 'Lista de Ordens de Serviço (Selecione um Contrato Acima)'}
      </h2>

      <div className="os-list-details">
        {contratoSelecionado && osFiltradas.length === 0 && (
          <p className="os-placeholder">Nenhuma Ordem de Serviço encontrada para este contrato.</p>
        )}

        {osFiltradas.map(os => (
          <div key={os.os_number} className="os-card-item">
            <div className="os-header">
              <span className="os-number">OS #{os.os_number}</span>
              <span className={`os-status status-${os.status.replace(/\s/g, '').toLowerCase()}`}>{os.status}</span>
            </div>
            <p className="os-description">{os.descricao}</p>
            <div className="os-footer">
              <span>Prioridade: {os.prioridade}</span>
              <span>Abertura: {os.data_abertura}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard