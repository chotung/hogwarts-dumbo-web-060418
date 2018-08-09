import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter';
import HogDisplay from './HogDisplay';

const weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {

  state = {
    hogs: [...hogs],
    filters: {
      sortby: 'name',
      greased: false
    },
    hidden: false,
    hiddenHogs: []
  }

  // this.setState({cheese: 'cheddar'})
  // this.setState((prevState) => ({...prevState, cheese:"gorgonzola"}))

  setHogsFilter = (filter) => {
    let sortedHogs
    filter === 'name' ? sortedHogs = this.sortHogsByName() : sortedHogs = this.sortHogsByWeight()
      this.setState(prevState => {
        return {
        hogs: sortedHogs,
        filters: {
          ...prevState.filters,
          sortby: filter
          }
        }
      })
    }

    setHogsGreased = () => {
        this.setState(prevState => {
          return {
            ...prevState,
          filters: {
            ...prevState.filters,
            greased: !prevState.filters.greased
           }
          }
        }, this.greasedHogs)
      }

  sortHogsByName = () => {
    let currentHogs = [...this.state.hogs]
    return currentHogs.sort((a, b) => {
        let num
        if(a.name < b.name) {
          num = -1;
        } else if (a.name > b.name) {
          num = 1;
        }
        return num
      })
    }

    sortHogsByWeight = () => {
      let currentHogs = [...this.state.hogs]
      return currentHogs.sort((a, b) => {
          return a[weightKey] - b[weightKey]
        })
      }

    greasedHogs = () => {
      let greased;
      if (this.state.filters.greased) {
         greased = this.state.hogs.filter(a => {
          return a.greased
        })
      } else {
        greased = hogs
      }
      this.setState(prevState => {
        return {
        ...prevState,
        hogs: greased
        }
      })
    }



  render() {

    return (<div className="App">
      <Nav/>
      <Filter filterGreasedHogs={this.setHogsGreased} filterHogs={this.setHogsFilter}/>
      <HogDisplay hogsArray={this.state.hogs} weight={weightKey} />

    </div>)
  }
}


export default App;
