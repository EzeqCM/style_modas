
import './Mas.css'
export default function Masculino() {
  return (
    <div className='secao'>
    <div>
        <h1>Seção Masculina</h1>
    </div>

    <div className='produtos'>
        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-masculino/Mblusa1.jpeg' alt='blusa infantil'/>
                <p className='tituloproduto'>Camisa Masculina Básica com Botões</p>
                <p> Cor: Caqui | Estilo: Casual | Detalhes: Botões na Frente | Material: 100% Algodão </p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$73,99</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-masculino/Mblusa2.jpeg' alt='blusa infantil'/>
                <p className='tituloproduto'>Camisa Masculina Carta Gráfica</p>
                <p>Cor: Azul Marinho | Estilo: Casual | Estampa: Letra | Detalhes: Gola V | Tecido: 100% Poliéster</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$87,99</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-masculino/Mblusa3.jpeg' alt='blusa infantil'/>
                <p className='tituloproduto'>Camisa Masculina Bolso Duplo </p>
                <p>Cor: Verde Militar | Estilo: Casual | Estampa: Simples | Detalhes: Bolsos na Frente | Tecido: 100% Poliéster</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$80,90</p>
        </button>
    </div>

    <div className='produtos3'>
        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-masculino/Mcalca1.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Calça Jeans Masculina Extend Sizes</p>
                <p>Cor: Lavagem Clara | Estampa: Simples | Tecido: 73% Algodão, 18% Poliéster, 9% Viscose</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$ 184,90</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-masculino/Mcalca2.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Calça Jeans Masculina Bolso Simples</p>
                <p>Cor: Preto | Estampa: Simples | Tipo: Calça skinny | Tecido: 95% Algodão, 5% Elastano</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$144,90</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-masculino/Mcalca3.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Calça Jeans Masculina Rasgado Simples</p>
                <p>Cor: Preto | Estampa: Simples | Tipo: Calça skinny | Tecido: 95% Algodão, 5% Elastano</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$157,99</p>
        </button>
    </div>

    <div className='produtos'>
        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-masculino/Mjaqueta1.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Moletom Masculino Detalhe de Letra</p>
                <p>Cor: Café | Estilo: Universitário | Estampa: Letra, Bloco de cores | Material: 95% Poliéster, 5% Elastano</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$102,99</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-masculino/Mjaqueta2.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Moletom Masculino Básico meio zíper</p>
                <p>Cor: Preto | Estilo: Casual | Estampa: Simples | Detalhes: Bolso, Ziper | Tecido: Algodão</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$108,95</p>
        </button>

        <button className='produto1'>
                <img className='imgdestaque' src='/imagens/img-masculino/Mjaqueta3.jpeg' alt='calca infantil'/>
                <p className='tituloproduto'>Capuz Masculino Básico Meio zíper</p>
                <p>Cor: Chumbo | Estampa: Simples | Detalhes: Zíper | Material: 100% Poliéster</p>
                <p className='bold'>Em estoque</p>
                <p className='bold'>R$124,99</p>
        </button>
    </div>
</div>
  );
}