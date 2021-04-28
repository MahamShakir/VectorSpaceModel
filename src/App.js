import React , { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FindInPage from '@material-ui/icons/FindInPage';
import Search from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import 'fontsource-roboto';
var pluralize = require('pluralize')


function App() {
  let [input, setInput] = useState("");
  let [result, setResult] = useState("NaN");
  let [idfs, setIDFS] = useState([]);
  let [doc_vectors, setDocVectors] = useState([])

  const getData = () => {
    fetch('vsm.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setDocVectors(myJson)
      });
  }

  const getIDFS = () => {
    fetch('idfs.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setIDFS(myJson)
      });
  }

  function handleInput(e){
    setInput(e.target.value);
  }

  function get_magnitude(vector){
    let i;
    let magnitude = 0;
    for(i = 0; i < vector.length; i++){
      magnitude += vector[i]*vector[i];
    }

    magnitude = Math.sqrt(magnitude);
    return magnitude;
  }

  function get_vector(doc_id){
    let vector = doc_vectors[doc_id];
    var values = Object.keys(vector).map(function(key){
      return vector[key];
    });
    return values;
  }

  function handleClick(){
    let i, doc_id, word;
    let query_vector = {};
    /* lemmentize input similar to word list */
    let query = input.toLowerCase().split(" ");
    for(i in query){
      query[i] = query[i].replace(/[.,'—’‘ªã©¯\/#!@?$%\^&\*;:(){}=\-_`~]/g,"");
      query[i] = query[i].replace(/\s{2,}/g," ");
      query[i] = pluralize.singular(query[i])
    }

    //remove empty spaces
    query = query.filter(e => e != "")

    for(word of query){
      query_vector[word] = 0;
    }
    for(word of query){
      query_vector[word] += 1;
    }
    let query_tfidf = {};
    for(word of query){
      query_tfidf[word] = query_vector[word] * idfs[word]
    }

    var values = Object.keys(query_tfidf).map(function(key){
      return query_tfidf[key];
    });
    
    let m_query = get_magnitude(values);
    let m_doc = get_magnitude(get_vector(2));
    let scores = {};
    for(doc_id = 1; doc_id < 51; doc_id++){
      let doc_list = doc_vectors[doc_id];
      for(word in query_tfidf){
        console.log(doc_list[word])
      }
    }


    


  }

  useEffect(() => {
    getData();
    getIDFS();
  }, [])

  return (
    <div>
      <Grid container spacing={3} alignItems="center" justify="center" style={{margin:"auto"}}>
        <Typography variant="h3" style={{textAlign:"center" , color:"#3f51b5" , marginTop: "20%" }} >Vector Space Model</Typography>
        <div style={{ marginTop:10 ,height:"1px" , width:"100%", backgroundColor:"gray"}}>
        </div>
        <Grid item xs={12} >
        </Grid>
        <Grid item xs={12} >
        </Grid>
        <Grid item  >
          <FindInPage/>
        </Grid>
        <Grid item alignItems="center" justify="center" xs={8}>
          <TextField id="search-field" label="Enter Query" fullWidth="true" onChange={handleInput} onKeyPress={(e) => { if(e.key === 'Enter') handleClick()}} />
        </Grid>
        <Grid item xs={12} >
        </Grid>
        <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        size="medium"
        startIcon={<Search />}>
        Search
        </Button>
        <div style={{ marginTop:20 , height:"1px" , width:"100%", backgroundColor:"gray"}}>
        </div>

        <Grid item xs={11} style={{marginTop:15}}>
          <Typography variant="button" style={{color:"#3f51b5", fontWeight:"bold"}}>Result Set:</Typography>
          <Card variant="outlined" style={{backgroundColor:"#e0e0e6"}}>
            <CardContent style={{overflowWrap:"break-word"}}>
              <Typography variant="button" style={{fontSize:"18px"}} >{result}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;