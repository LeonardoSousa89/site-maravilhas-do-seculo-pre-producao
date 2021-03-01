import React ,{Component} from 'react'
import './Sobre.css'

import Perfil from '../../assets/perfil.jpg'
import Zap from '../../assets/zap.png'
import Mail from '../../assets/mail.jpg'
import faceProf from '../../assets/faceProf.png'
import InstaProf from '../../assets/instaProf.png'
import Seller from '../../assets/seller.png'


export default class Sobre extends Component {


    render()    {
        return(
            <div className="componentSobre">
               <div className="componentProfile">  
                    <img className="componentImgSobre" src={Perfil}/>
                    <div className="componentDescriptionSobre">
                        <p className="componentDescriptionSobreContent">
                           Olá, Seja bem vindo! Eu me chamo <strong>Javan Santos </strong> e sou revendedor
                           autorizado do grupo <em>Timol&copy;</em>. Possuo 
                           pouco mais de 10 anos de experiência com este
                           produto.
                           E tenho obsevado seus efeitos nas vidas das pessoas
                           e com este intuito resolvi ampliar a distribuição
                           desta mercadoria que possui qualidade em sua produção
                           e constituição.
                           Mas estou principalmente aqui pelos beneficios que tenho observado 
                           no consumo de tal produto, gerando beneficios nutricionais a todos os 
                           consumidores deste suprimento que em sua estrutura, esbanja saúde para
                           os seus compradores.

                        </p>
                        <ul className="componentMissaoVisaoValores">
                            <ul><h4>Missão:</h4>
                                <p>Levar ao público um
                                produto de melhoria e concepção de saúde mais agradável!</p>
                            </ul>
                            <ul><h4>Visão:</h4>
                                <p>satisfazendo as necessidades de nossos clientes com a melhor qualidade!</p>
                            </ul>
                            <ul><h4>Valores:</h4>
                                <p>responsabilidade,compromentimento e eficiência em nossos serviços!</p>
                            </ul>
                        </ul>

                    </div>
               </div>

               <div className="componentClientSpeak">  
                   <span className="componentcardSobreComment1">
                        <img className="componentImgSobreComment1" src={Perfil}/>
                        <p className="comnponentComentaries1">nome do cliente</p>
                        <p className="comnponentComentariesCliente1">&#10077;comentário&#10078;</p>
                   </span>
                   <span className="componentcardSobreComment2">
                        <img className="componentImgSobreComment12" src={Perfil}/>
                        <p className="comnponentComentaries2">nome do cliente</p>
                        <p className="comnponentComentariesCliente2">&#10077;comentário&#10078;</p>
                   </span>
                   <span className="componentcardSobreComment3">
                        <img className="componentImgSobreComment3" src={Perfil}/>
                        <p className="comnponentComentaries3">nome do cliente</p>
                        <p className="comnponentComentariesCliente3">&#10077;comentário&#10078;</p>
                   </span>
               </div>

               

               <div className="componentFooterSobre">  

                        <div className="componentContatoSobre">

                        <img className="componentImgSobreZap" src={Zap} />
                        <strong className="componentSobreZapText"> Contato(Tel): (xx)xxxxx-xxxx</strong>

                        <img className="componentImgSobreMail" src={Mail}/> 
                        <strong className="componentSobreMailText"> Email:   javan@eu.com</strong>
                        </div>


                        <div className="componentContatoSobreRedesSociais">
                            <a href="https://www.facebook.com/javan.santos.5" target="blank">
                                <img className="componentContatoSobreRedesSociaisFaceProf" src={faceProf}/>
                            </a>
                            <a  href="https://instagram.com/javan_jsantos?igshid=1gzotvlrnvdr6" target="blank">
                                <img className="componentContatoSobreRedesSociaisInstaProf" src={InstaProf }/>
                            </a>
                        </div>
                        <div className="componentContatoSobreProfileTimol">
                            <div className="componentSobreProfileTimolSeller">
                                   <a href="https://www.timol.com.br/home.aspx" target="blank">
                                   <img  src={Seller} className="componentImgSobreSeller" />
                                   </a>
                                   <p>
                                     clique no <i className="ComponentIconComunication">ícone</i><div></div>acima e venha nos <strong>conhecer!</strong>
                                       {/** <strong>Timol&copy;</strong>  */}
                                   </p>
                            </div>
                        </div>

                        
               </div>

               <div className="componentSobreCopy">
                   <strong className="copyrightSobre">copyright&copy; Maravilhas do Século e todos os seus direitos reservados.</strong>
               </div>
            </div>
        )
    }
}