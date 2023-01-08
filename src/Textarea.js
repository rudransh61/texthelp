import React, { useState } from 'react'



export default function Textarea() {
    const [text,settext] = useState('Enter your Text Here')

    const handlechange = (event)=>{
        settext(event.target.value);
    }
    const upper = ()=>{
        settext(text.toUpperCase());
    }

    const lower = ()=>{
        settext(text.toLowerCase());
    }

    const clear = ()=>{
        settext("");
    }

    const copy = ()=>{
        var text = document.getElementById('mybox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const extraspace = ()=>{
        let newtxt = text.split(/[ ]+/);
        settext(newtxt.join(" "))
    }

    const countWords = () =>{
        let wc = text.split(" ").length;
        text.split(" ").forEach((word) => {
            if(!word.length){
                wc -= 1;
            }
        });

        return wc;
    }

    const title = ()=> {
        settext(text.split(" ").reduce( (s, c) => s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), ''));
        }

    const reverse = ()=> {
        settext(text.split("").reverse().join(""));
    }
    const removeLines= () => settext(text.split(/\r?\n/).filter(line => line.trim() !== '').join('\n'));


    const ipsum = ()=>{
        settext(text+"Lorem ipsum dolor sit amet. Aut ipsam incidunt aut nostrum vero ut mollitia voluptas sed culpa voluptate ut distinctio accusantium est autem mollitia et amet neque. Sit illum necessitatibus est maxime debitis est molestiae consequatur.\n Eos tempora sequi hic dolore corrupti aut magnam perferendis et omnis magni! Ut quisquam nisi hic totam laboriosam sit quos voluptates eum voluptate neque.\n Qui quas unde rem dolorem quam sit natus magni.\n Et nemo culpa quo asperiores facilis eos accusantium illum aut animi saepe.\n Et distinctio molestiae ut assumenda obcaecati eum voluptas modi aut totam excepturi id odio voluptas et illum nostrum?Et modi cupiditate non ipsam odio aut quos accusamus sit commodi internos sit suscipit molestiae eos enim minima.\n Eum tempore voluptatibus ex doloremque quisquam sed sint dignissimos! Et quibusdam architecto qui perferendis recusandae sed sint obcaecati eos itaque quis vel voluptatum repudiandae id magni galisum.\n Et deleniti facere aut fuga minima id voluptatibus obcaecati.");
    }

    return (
    <div>
        <h3 className='my-5'>TextHelp! -by Rudransh</h3>
        <div className='mb-10'>
        <textarea className='form-control' id='mybox' rows="8" value={text} onChange={handlechange}></textarea>
        </div>
        <div className='container'>
            <button className='btn btn-primary mx-2 my-2' onClick={upper}>Convert to Uppper Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={lower}>Convert to Lower Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={title}>Convert to Title Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={copy}>Copy</button>
            <button className='btn btn-primary mx-2 my-2' onClick={clear}>Clear Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={removeLines}>Remove Extra Lines</button>
            <button className='btn btn-primary mx-2 my-2' onClick={extraspace}>Remove Extra Spaces</button>
            <button className='btn btn-primary mx-2 my-2' onClick={reverse}>Reverse</button>
            <button className='btn btn-primary mx-2 my-2' onClick={ipsum}>Lorem Ipsum</button>
        </div>
        <div className='container my-3'>
            <h3>Summary</h3>
            <p>{countWords(text)} words and {text.length} characters</p>
            <p>On an Average it takes {0.008*countWords(text)} minutes to read this</p>
            <h3>Preview you text</h3>
            <p>{text}</p>
        </div>
    </div>
    )
}
