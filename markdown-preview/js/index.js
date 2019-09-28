marked.setOptions({
  breaks: true,
});
class Markapp extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      markdown: placeholder,
     
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      markdown:event.target.value
    })
  }
  render(){
     let containerClass = 'container-class col-xs-12 col-md-6';
    
    return( 
        <div>
      
        <div  className={containerClass }>
        <h1>MarkDown Editor</h1>
          <hr></hr>
        <textarea  id="editor" type="textarea" className="Markdown-text"  value={this.state.markdown} onChange={this.handleChange}/>
          <hr/>
        </div>
        
        
      <div  className={containerClass}>
        <h1>Markdown Preview</h1>
        <hr></hr>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}>
        </div>
        </div>
        </div>
     
    
    )
  }
}

const placeholder= `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
<ul>
<li>monday</li>
<li>tuesdau</li>
<li>wendsday</li>

"monday is for work"\n
<i>tuesday isfor exersice</i>\n
`


ReactDOM.render(<Markapp />, document.getElementById('app'));























ReactDOM.render(React.createElement(Markapp, null), document.getElementById('app'));
