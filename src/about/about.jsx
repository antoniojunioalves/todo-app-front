import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <PageHeader name='Sobre' small='Aplicação'></PageHeader>

        <h2>Versão da aplicação</h2>
        <p>1.0</p>
        <h2>Missão e visão</h2>
        <p>Aprender react e ser melhor do que eu era ontem</p>
    </div>
)