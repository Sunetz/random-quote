import React from "react";
import { Component} from "react";
import quotes from './quotes.json'
import { FaQuoteLeft, FaQuoteRight, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const new_quotes = quotes.quotes; //array
let q = new_quotes[ Math.floor( Math.random() * new_quotes.length ) ]
let link = "https://twitter.com/intent/tweet?text=" + encodeURI(q.quote) + encodeURI(q.author)
console.log(link)


export default class QuoteBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quote: q,
            link: link
        }
        this.changeQuote = this.changeQuote.bind(this)
    }
    changeQuote(){
        const q = new_quotes[ Math.floor( Math.random() * new_quotes.length ) ]
        this.setState((state)=>({
            quote: q,
            link: link
        }))
        const link = "https://twitter.com/intent/tweet?text=" + encodeURI(q.quote) + ' ' + encodeURI(q.author)
        console.log(link)
    }

    render(){
        return (
            <div id='quote-box' style={{
                backgroundColor: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase(),
                width:'400px',
                height:'fit-content',
                borderRadius:'10px',
                padding:'20px',
                boxSizing:'border-box',
                margin:'50px auto',
                position: 'relative',
                }}>
                <FaQuoteLeft/>
                <h3 id='text'>{this.state.quote.quote}</h3>
                <FaQuoteRight/>
                <p id='author'>{this.state.quote.author}</p>
                <div style={{
                    display:'flex',
                    width:'360px',
                    justifyContent:'space-between',
                    position:'absolute',
                    bottom: '0',
                    right:'10',
                    margin: 'auto',
                    marginBottom:'10px',
                    textAlign:'center'}}>
                    <a id="tweet-quote" href={this.state.link}>
                        <FaTwitterSquare style={{
                            width:'50px',
                            height:'50px',
                            display:'block'}}/>
                    </a>

                    <button
                        id='new-quote'
                        style={{
                        border:'1px dashed white',
                        backgroundColor:'transparent',
                        color: 'white',
                        padding:'10px',
                        cursor:'pointer',
                        borderRadius:'5px'
                    }}
                        onClick={this.changeQuote}>
                        NEW QUOTE
                    </button>
                </div>





            </div>
        )
    }
}
// "https://twitter.com/intent/tweet?hashtags=quotes&amp;text=${q}"
