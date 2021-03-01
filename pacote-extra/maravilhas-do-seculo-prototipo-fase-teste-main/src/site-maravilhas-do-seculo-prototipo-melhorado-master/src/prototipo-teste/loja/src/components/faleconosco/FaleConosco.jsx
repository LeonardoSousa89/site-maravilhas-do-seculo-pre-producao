import React ,{Component} from 'react'
import './FaleConosco.css'

import Msg from '../../assets/msg.jpg'
import Social from '../../assets/social.jpg'
import SocialInstagram from '../../assets/insta.jpg'
import SocialFace from '../../assets/face.png'

import firebase from '../Db/Db'

export default class FaleConosco extends Component {
        constructor(props){
            super(props)

            this.state ={
                nome:'',
                email:'',
                mensagem:''
            }

            this.enviar = this.enviar.bind(this)
        }

        enviar = (e) =>{
            let clientes = firebase.database().ref('mensagems')
            let chave = clientes.push().key

            clientes.child(chave).set({
                nome:this.state.nome,
                email:this.state.email,
                mensagem:this.state.mensagem
            })

            this.limpar()
            e.preventDefault()
        }

        limpar = () =>{
            this.setState({
                nome:'',
                email:'',
                mensagem:''
            })
        }

        render()    {
            return(
                <div className="componentFale">
                    <img className="componentMsg" src={Msg} />
                    <div className="componentInform">
                        <h3 className="componentMsgBody">nesta seção esperamos a participação de vocês
                            nossos queridos clientes e visitantes. Vocês participarão de promoções e receberão, 
                            atualizações a respeito de pesquisas cientifícas envolvendo uso de água
                            e os benefícios conquistados até agora por meio da tecnologia. Este conteúdo será disponibilizado através de nossos pdf's educativos.
                                Para receber o <em>pdf</em>, basta preencher os campos no formulário abaixo!</h3>
                    </div>

                    <div className="componentFormulario">
                            <div className="componentConteinerName">
                                <input placeholder="insira seu nome..."  type="text" value={this.state.nome} onChange={(nome) =>this.setState({nome:nome.target.value})}  className="componentPutName"/>
                            </div>

                            <div className="componentConteinerEmail">
                                <input placeholder=" insira seu email... obrigatório *  " type="text" value={this.state.email} onChange={(email) =>this.setState({email:email.target.value})} className="componentPutEmail"/>
                                <input placeholder=" email...  ( obrigatório * ) " type="text"  className="componentPutEmailLittleDevices"/>
                            </div>

                            <div className="componentConteinerAreaText">
                                <textarea placeholder="insira sua opinião ou critica..." type="text" value={this.state.mensagem} onChange={(mensagem) =>this.setState({mensagem:mensagem.target.value})} className="componentPutAreaText"/>
                            </div>
                            <div className=" componentButtonPersistence">
                                <button className="componentEnviar" onClick={this.enviar}>
                                    enviar
                                </button>
                            </div>
                    </div>

                    <div className="componentFaleFooter">

                        <div className="componentSocialDesign">
                        <img className="componentImgDesign" src={
                            Social} alt=""/>
                        </div>
                       
                        <div className="componentSocialText" >
                            <h1 className="componentSocialMsg">Sigam-nos em nossas redes Sociais!</h1> 

                            <h4 className="componentSocialMsgLittleDevice">Sigam-nos em nossas redes Sociais!</h4> 

                            <a href="https://instagram.com/javan_jsantos?igshid=1gzotvlrnvdr6"  target="blank" >
                                <img className="componetSocialInstagram"  src={SocialInstagram } alt=""/>
                            </a>
                            
                            <a href="https://www.facebook.com/javan.santos.5" target="blank">
                                <img className="componetSocialFace" src={ SocialFace} alt=""/>
                            </a>
                            
                            <label className="componentCopyright">copyright&copy; Maravilhas do Século e todos os seus direitos reservados. </label>
                            </div>
                    </div>
                

                           
                </div>
            )
        }
}