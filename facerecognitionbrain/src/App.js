import React, {Component} from 'react';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import 'tachyons';

//Clarifai API
let app = new Clarifai.App(
  {apiKey: '9a819578268145baa8999d456553a9e9'}
  );

class App extends Component {
  constructor() {
    super();
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries : 0,
        joined: ''
      }
    }
  };

loadUser = (data)=>{
  this.setState({user: {
      id: data.id,
        name: data.name,
        email:  data.email,
        entries :  data.entries,
        joined:  data.joined
    }}
  )
}

  // componentDidMount(){
  //   fetch('http://localhost:3000')
  //   .then(response => response.json())
  //   .then(console.log)
  // }

  particlesInit(main) {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }
  particlesLoaded(container) {
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  };

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log('click');
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict('f76196b43bbd45c99b4f3cd8e8b40a8a', this.state.input)
      .then((response) => {
        // do something with response
        if(response){
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response =>{response.json()})
          .then(count => {
            this.setState({users: {
              entries: count
            }})
          })
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route)=>{
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route:route});
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home'
        ? <div>
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
        </div> 
        : (
          this.state.route === 'signin'?
          <SignIn onRouteChange={this.onRouteChange} />
          :
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )


        }
      </div>
    );
  }
}


export default App;
