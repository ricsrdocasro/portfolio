import React from 'react'
import diff from '../assets/diff-eq.png'
import tracking from '../assets/tracking.svg'
import air from '../assets/air.jpg'

const Academics = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Jornada Acadêmica</h1>
            <div>
                <head className="text-2xl mb-10 flex flex-wrap lg:justify-center">Docência</head>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <img 
                            src={diff} 
                            alt="equações diferenciais"
                            width={150}
                            height={150}
                            className="mb-6"
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">Monitoria</h6>
                        <p>Foi monitor bolsista do componente curricular Equações Diferencais Ordinárias, ajudando a resolver dúvidas dos alunos com EDOs de primeira e segunda ordem.</p>
                    </div>
                </div>
            </div>
            <div>
                <head className="text-2xl mb-10 flex flex-wrap lg:justify-center">Pesquisa</head>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <img 
                            src={tracking} 
                            alt="Rastreio"
                            width={150}
                            height={150}
                            className="mb-6"
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">Rastreador para Coleta Seletiva</h6>
                        <p>Atuou no projeto de iniciação científica para desenvolver um rastreador para os caminhões da coleta seletiva.</p>
                    </div>
                </div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <img 
                            src={air} 
                            alt="Cidade com Neblina"
                            width={150}
                            height={150}
                            className="mb-6"
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">Monitoramento da Qualidade do Ar</h6>
                        <p>Atualmente atua no projeto de iniciação científica para desenvolver um dispositivo para monitorar a qualidade do ar.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Academics
