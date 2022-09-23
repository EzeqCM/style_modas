import './Home.css';

function Home() {
  
  return (

    <body background = '/imagens/background.png'>
    <div className='content'>

    <div className='slides'>
      <input type='radio' name='radio' id='slide1' checked/>
      <input type='radio' name='radio' id='slide2'/>
      <input type='radio' name='radio' id='slide3'/>

      <div className="slide s1">
        <img src="/imagens/sobre.png" alt="Sobre Nos" />
      </div>
      <div className="slide">
        <img src="/imagens/sobre2.png" alt="Navegue" />
      </div>
      <div className="slide">
        <img src="/imagens/formaspagamento.png" alt="Pagamento" />
      </div>

        <div className='navigation'>
          <label className='bar' for="slide1"></label>
          <label className='bar' for="slide2"></label>
          <label className='bar' for="slide3"></label>
        </div>
    </div> 
  </div>

  </body> 

    );

}
export default Home;