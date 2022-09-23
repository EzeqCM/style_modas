import React from 'react';
import './cal.css';
export default function Calcados() {
  return (
    <div className='secao'>
    <div>
        <h1>Seção de Calçados</h1>
    </div>

    <div className='produtos'>
        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-calcados/Fcalcado1.jpeg' alt='blusa infantil'/>
                <p className='tituloproduto'>Sandálias Mule tira Transparente</p>
                <p >Tipo: Alças | Cor: Prata | Estampa: Simples</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 107,95</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-calcados/Fcalcado2.jpeg' alt='blusa infantil'/>
                <p className='tituloproduto'>Sandálias Alça Fina</p>
                <p>Tipo: Chinelos | Cor: Off White | Estilo: Festa</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 73,95</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-calcados/Fcalcado3.jpeg' alt='blusa infantil'/>
                <p className='tituloproduto'>Sandálias de tiras Metálico</p>
                <p>Tipo: Alças | Detalhes: Strass | Cor: Prata </p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 166,95</p>
        </button>
    </div>

    <div className='produtos3'>
        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-calcados/INFcalcado1.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Tênis Infantil de Amarrar</p>
                <p>Cor: Off White  | Estampa: Bloco de Cores, Letras | Material da palmilha: EVA</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$96,90</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-calcados/INFcalcado2.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Tênis Infantil de Amarrar</p>
                <p>Cor: Preto e Branco | Estampa: Bloco de Cores, Letra | Material da palmilha: Tecido</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 81,90</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-calcados/INFcalcado3.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Tênis Infantil Hook-And-Lop</p>
                <p>Cor: Preto | Material da palmilha: Poliéster | Material da Sola: Borracha</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 118,90</p>
        </button>
    </div>

    <div className='produtos'>
        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-calcados/Mcalcado1.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Tênis Masculino de Skatista </p>
                <p>Cor: Branco | Estampa: Simples | Material da palmilha: Poliéster</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 150,00</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-calcados/Mcalcado2.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Tênis Masculino Cano Alto</p>
                <p>Cor: Preto e Branco | Material da Sola: Borracha | Tipo: Tênis Alto</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 170,00</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-calcados/Mcalcado3.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Tênis Masculino com Cadarço Gráfico</p>
                <p>Cor: Branco e Preto | Estampa: Letra | Material da palmilha: Malha </p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 151,90</p>
        </button>
    </div>
</div>
  );
}
