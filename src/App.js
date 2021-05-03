import React,{Component} from "react";
import './App.css';
import Loader from "./components/Loader";
import Table from './components/Table'
import _ from 'lodash'
import TableSearch from "./components/TableSearch";
class App extends Component {
 state ={
 
   isLoading:true,
   data: [],
   search:'',
   row:null,
   currentPage:0,
  
 }
  async componentDidMount()  {
    const response = await fetch(`http://www.filltext.com/?rows=50&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&country={country}&address={addressObject}&description={lorem|32} `)
    const data = await response.json()
   
     this.setState (
       {
         isLoading:false,
         data:data,
         
         data: _.orderBy(data, this.state.sortField, this.state.sort)
       })
  }
  onSort=sortField=>{
   const cloneData = this.state.data.concat()
   const sortType = this.state.sort ==='asc'?'desc':'asc'
   const orderedData = _.orderBy(cloneData,sortField,sortType)
   this.setState ({
     data:orderedData,
     sort:sortType,
     sortField
   })

}
  searchHandler= (e) =>(
 this.setState({search:e.target.value})
)
  getFilteredData(){
    const {data, search} = this.state
    if(!search){
      return data
    }
    var result = data.filter(item=>  {
      return( 
       item['country'].toLowerCase().includes(search.toLowerCase())
    )
  })
      if(!result.length){
        result = this.state.data
      }
       return result
      }

  render() {
    const filteredData = this.getFilteredData();
    return (
      <div className="container">
  {
    this.state.isLoading ?
     <Loader/>
    :
    <React.Fragment>
   <TableSearch onSearch={this.searchHandler}/>
    <Table 
    data={this.state.data}
    onSort ={this.onSort}
     sort ={this.state.sort}
     sortField ={this.state.sortField}
    />
    </React.Fragment>
  }
 </div>
    )
  }
}



export default App;
