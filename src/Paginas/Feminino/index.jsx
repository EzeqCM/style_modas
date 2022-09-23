import React from 'react'
import './femi.css'
export default function Feminino() {
  return (
    <div className='secao'>
    <div>
        <h1>Seção Feminina</h1>
    </div>

    <div className='produtos'>
        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-feminino/Fblusa1.jpeg' alt='blusa infantil'/>
                <p className='tituloproduto'> Zíper Simples Glamour Top</p>
                <p >Cor: Preto | Estilo: Festa | Tipo de gola: Sem Alças | Comprimento da Manga: Sem Mangas</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 38,90</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-feminino/Fblusa2.jpeg' alt='blusa infantil'/>
                <p className='tituloproduto'>PARTHEA - Parte superior</p>
                <p>Cor: Damasco | Estampa: Simples | Comprimento da Manga: Sem Mangas</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$72,90</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-feminino/Fblusa3.jpeg' alt='blusa infantil'/>
                <p className='tituloproduto'>Assimétrico Strass Zíper Busto Ruched </p>
                <p>Cor: Champanhe | Estilo: Sensual | Estampa: Simples</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 36,90</p>
        </button>
    </div>

    <div className='produtos3'>
        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-feminino/Fcalca1.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Calça Feminina Bolso Zíper Simples</p>
                <p>Cor: Verde | Estilo: elegante | Estampa: Simples | Tipo: Perna Larga</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 51,90</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-feminino/Fcalca2.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Zíper Simples ocasional Calça Feminina</p>
                <p>Cor: Rosa chiclete | Estilo: Casual | Tipo: Perna Larga | Detalhes: Ziper</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$90,99</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-feminino/Fcalca3.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Botão Zíper Simples Calça Feminina</p>
                <p>Cor: Off White | Estilo: Casual | Tipo: Perna reta</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 83,90</p>
        </button>
    </div>

    <div className='produtos'>
        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-feminino/Fvestido1.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Costas Nuas Glamour Vestido</p>
                <p>Estilo: Festa | Estampa: Simples | Tipo: Suspensório | Linha da cintura: Cintura Alta</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 117,95</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-feminino/Fvestido2.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Vestido Sólido Um ombro Só </p>
                <p>Cor: Damasco | Estilo: elegante | Detalhes: Cruzado, Assimétrico, Nó</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 82,90</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-feminino/Fvestido3.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Assimétrico Glamour Vestido</p>
                <p>Cor: Preto | Estilo: Festa | Estampa: Simples</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 60,95</p>
        </button>
    </div>
</div>
  );
}
