import React from 'react'
import'./style.css'
import logo from '../images/260437253_2878733355751857_2366329570976393831_n.png'

const About = () => {
	return (
		<div style={{width:'100%'}}>
				
				<div>
				<p style={{textAlign: 'justify'}}>
					Fournisseur matériel vidéosurveillance  est synonyme d’innovation,
					de perfection et de professionnalisme. 
					Cette vision, s’applique à notre plus grande priorité : nos clients.
				</p>
				</div>


				<div className='cont'>
					<p style={{textAlign: 'justify',marginTop:'140px'}}>
					Nous mettons à votre service, une équipe compétente constituée de techniciens prévenants et de dirigeants engagés. 
					Un objectif commun nous unis, vous offrir la meilleure prestation possible.
					Vous cherchez à bien maîtriser votre entreprise et vos données, il est nécessaire de recourir à des solutions matérielles 
					et logicielles bien adaptées et complémentaires.
					</p>
					<img src={logo} alt="Logo" width='400px' height='400px' style={{marginLeft: "50px"}}></img>
				</div>
				
				<div  >
						<p style={{textAlign: 'justify'}}>
							Notre vision se découle de cette nécessité à savoir :
							Vous offrir la solution la mieux adaptée à vos acquis dans le domaine de la sécurité.
							Partager avec vous la passion de la perfection du travail en vous fournissant des outils modernes à la pointe de la technologie.
							Nous offrons tout le matériel nécessaire à la vidéosurveillance :
						</p>
						<div style={{marginLeft: "50px"}}>
							<p>Des caméras IP de tout type : </p>
								<ul>
									<li>caméras IP existants</li>
									<li>Caméra IP fixe</li>
									<li>caméra IP extérieur</li>
									<li>caméra IP wifi</li>
									<li>caméras IP Méga Pixel</li>
								</ul>
							<p>Des caméras HDCVI : </p>
								<ul>
									<li>caméras dôme fixe</li>
									<li>caméras extérieures</li>
									<li>caméras espion, motorisées, zoom, auto tracking…</li>
								</ul>			
						</div>
				</div>
		</div>
	)}

export default About
