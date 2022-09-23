import './infantil.css'

function Infantil(){
    
    return( 
        
    <div className='secao'>
        <div>
            <h1>Seção Infantil</h1>
        </div>

        <div className='produtos'>
            <button className='produto1'>
                    <img className='imgdestaque' src='/imagens/img-infantil/INFblusa1.jpeg' alt='blusa infantil'/>
                    <p className='tituloproduto'>Blusa Infantil Estampa de Urso</p>
                    <p >Cor: Multicolorido | Estilo: Casual | Estampa: Desenho Animado, Estampado cadena</p>
                    <p className='bold'>Em estoque</p>
                    <p className='bold'>R$30,95</p>
            </button>

            <button className='produto1'>
                    <img className='imgdestaque' src='/imagens/img-infantil/INFblusa2.jpeg' alt='blusa infantil'/>
                    <p className='tituloproduto'>Blusa Infantil Estampado</p>
                    <p>Cor: Preto | Tecido: 91% Poliéster, 9% Elastano | Estilo: Casual</p>
                    <p className='bold'>Em estoque</p>
                    <p className='bold'>R$ 20,90</p>
            </button>

            <button className='produto1'>
                    <img className='imgdestaque' src='/imagens/img-infantil/INFblusa3.jpeg' alt='blusa infantil'/>
                    <p className='tituloproduto'>Blusa Infantil Desenho Animado</p>
                    <p>Cor: Multicolorido | Estilo: Casual | Tipo de gola: Gola Redonda</p>
                    <p className='bold'>Em estoque</p>
                    <p className='bold'>R$22,95</p>
            </button>
        </div>

        <div className='produtos3'>
            <button className='produto1'>
                    <img className='imgdestaque' src='/imagens/img-infantil/INFcalca1.jpeg' alt='calca infantil'/>
                    <p className='tituloproduto'>Calça Infantil Masculina Azul Escuro</p>
                    <p>Cor: Lavagem escura | Tipo: Jogger | Detalhes: Bolso</p>
                    <p className='bold'>Em estoque</p>
                    <p className='bold'>R$ 75,00</p>
            </button>

            <button className='produto1'>
                    <img className='imgdestaque' src='/imagens/img-infantil/INFcalca2.jpeg' alt='calca infantil'/>
                    <p className='tituloproduto'>Calça Masculina Infantil Cargo</p>
                    <p>Cor: Caqui | Estilo: Casual | Tipo: Calças cargo </p>
                    <p className='bold'>Em estoque</p>
                    <p className='bold'>R$63,99</p>
            </button>

            <button className='produto1'>
                    <img className='imgdestaque' src='/imagens/img-infantil/INFcalca3.jpeg' alt='calca infantil'/>
                    <p className='tituloproduto'>Calça Masculina Infantil Datalhada</p>
                    <p>Cor: Castanho/Azul | Estilo: Casual | Estampa: Simples</p>
                    <p className='bold'>Em estoque</p>
                    <p className='bold'>R$ 50,90</p>
            </button>
        </div>

        <div className='produtos'>
            <button className='produto1'>
                    <img className='imgdestaque' src='/imagens/img-infantil/INFvestido1.jpeg' alt='calca infantil'/>
                    <p className='tituloproduto'>Vestido Infantil Bloco de Cores</p>
                    <p>Cor: Multicolorido | Estilo: Fofo | Estampa: Animal, Bloco de cores</p>
                    <p className='bold'>Em estoque</p>
                    <p className='bold'>R$46,99</p>
            </button>

            <button className='produto1'>
                    <img className='imgdestaque' src='/imagens/img-infantil/INFvestido2.jpeg' alt='calca infantil'/>
                    <p className='tituloproduto'>Vestido Infantil Apliques Babado</p>
                    <p>Cor: Azul bebê | Estilo: Festa | Detalhes: Apliques, Babado, Franzido</p>
                    <p className='bold'>Em estoque</p>
                    <p className='bold'>R$ 73,95</p>
            </button>

            <button className='produto1'>
                    <img className='imgdestaque' src='/imagens/img-infantil/INFvestido3.jpeg' alt='calca infantil'/>
                    <p className='tituloproduto'>Vestido Infantil Estampa Florada</p>
                    <p>Cor: Rosa Pó  | Estampa: Floral | Detalhes: Plissado, Cruzado, Bainha com Babado</p>
                    <p className='bold'>Em estoque</p>
                    <p className='bold'>R$61,99</p>
            </button>
        </div>
    </div>
    );
}
export default Infantil;