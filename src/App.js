import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import { Route } from 'react-router-dom';
import HeroList from './components/heroList/heroList.jsx';
import Settings from './components/settings/Settings.jsx';
import AddHero from './components/addHero/AddHero.jsx';
import heroPics from './components/heroPics/heroPics.jsx';

class App extends Component {
	constructor() {
		super();

		this.state = {
			appName: 'Hero Book',
			heroList: [
				{
					name: 'Iron Man',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e13eb438650505.598fa118c8eab.jpg'
				},
				{
					name: 'Black Panter',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1454d038650505.598fa118c9674.jpg'
				},
				{
					name: 'Ant Man',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/14809638650505.598fa118c91f3.jpg'
				},
				{
					name: 'Spiderman',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/64838738650505.598fa28916115.png'
				},
				{
					name: 'Hulk',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7dae7438650505.598fa119bd7b4.jpg'
				},
				{
					name: 'Vision',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7383d138650505.598fa11956e27.jpg'
				},
				{
					name: 'Falkcon',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/db780138650505.598fa11956761.jpg'
				},
				{
					name: 'Doctor Stranger',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd44d538650505.598fa11957245.jpg'
				},
				{
					name: 'Gamora',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9b4afa38650505.598fa11a29566.png'
				},
				{
					name: 'Capitan America',
					desc: 'Fictional superhero',
					img: 'https://blogboard.net/upload/108/flat-design-avatars-4.png'
				},
				{
					name: 'Starlord',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3595e038650505.598fa119bd2bc.jpg'
				},
				{
					name: 'Thor',
					desc: 'Fictional superhero',
					img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/9024fe38650505.598fa11a292af.png'
				}

				
			]
		}
	}

  	render() {
    	return (
    		<>
	      		<Navbar appName={this.state.appName}/>

	      		<Route exact path="/"
	      			render={(props) => <HeroList heroes={this.state.heroList}/>}/>
                <Route path="/heroPic"
                    render={(props) => <heroPics heroes={this.state.galleryList}/>}/>
	      			
	      		<Route path="/addHero" component={AddHero}/>
				<Route path="/settings" component={Settings}/>
	  			
    		</>
    	);
  	}
}

export default App;
