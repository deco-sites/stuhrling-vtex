import type { ImageWidget } from "apps/admin/widgets.ts";
import { useRef, useState, useEffect } from "preact/hooks";
import axiod from "https://deno.land/x/axiod/mod.ts";

interface Props {
}

const submitHandler = function (event) {
  event.preventDefault();
  const email = event.target[0].value
  const name = event.target[1].value
  const message = event.target[2].value

  console.log(`Message sent`, {email: email, name:name, message: message})

  /*axiod.post(`https://node-serve-vtex.herokuapp.com/stuhrling/sendmessage`, {body: {email: email, name:name, message: message}}).then((res)=>{
    console.log(`res: `, res).catch((error) => {
      console.log(error);
    });
  })*/

  axiod({
    method: "POST",
    url: `https://node-serve-vtex.herokuapp.com/stuhrling/sendmessage`,
    data: {email: email, name:name, message: message}
  }).then(response=>{
    console.log(`Response`, response)
    alert("Sua mensagem foi registrada!")
  })
};
export default function ContactForm() {
  const [devAmbient, setDev] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    if(window.location.href && (window.location.href.includes("tuhrling-vtex.deco.site") || window.location.href.includes("localhost"))  ){ setDev(true) } else return
    axiod.get(`https://node-serve-vtex.herokuapp.com/stuhrling/getmessages`).then(res=>{
      res.data?.messages ? setMessages(res.data?.messages.reverse()) : null
    })
  }, [])

  return (
    <div className={`mb-14 mt-[120px] xl:mt-0`}>
      <div
        className={`mb-12 bg-cover text-white flex text-3xl xl:text-6xl justify-center items-center uppercase font-bold p-[4%] bg-[url(https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4175/84364ad1-89be-47e2-87aa-fc2b69c0a98e)]`}
      >
        Entre em Contato
      </div>

      <form
        className={`max-w-[800px] m-auto px-[20px] xl:px-0`}
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className={`flex flex-col my-6`}>
          <label htmlFor="email" className={`flex gap-1 font-bold`}>
            Email <p className={`text-red-600`}>*</p>
          </label>
          <input
            required
            className={`border border-solid border-gray-500 h-10 px-5 rounded-md `}
            type="email"
            name=""
            id="email"
          />
        </div>
        <div className={`flex flex-col my-6`}>
          <label className={`flex gap-1 font-bold`} htmlFor="name">
            Nome <p className={`text-red-600`}>*</p>
          </label>
          <input
            required
            className={`border border-solid border-gray-500 h-10 px-5 rounded-md `}
            type="text"
            name=""
            id="name"
          />
        </div>
        <div className={`flex flex-col my-6`}>
          <label className={`flex gap-1 font-bold`} htmlFor="message">
            Sua Mensagem <p className={`text-red-600`}>*</p>
          </label>
          <textarea
            required
            className={`border border-solid border-gray-500 h-32 px-5 rounded-md `}
            type="text"
            name=""
            id="message"
          />
        </div>
        <button
          className={`bg-orange-600 rounded-md text-white font-bold text-lg py-1 px-6`}
        >
          Enviar
        </button>
      </form>

      {devAmbient && messages ? 
        <div className={`max-w-[1280px] m-auto`}>
          <h1 className={`w-full text-center bold text-4xl`}>Mensagens</h1>
          {
            messages.map(item => {
              return(
                <div className={`border-b-2 border-gray-600 shadow-lg my-2`}>
                  <div className={`flex gap-2`}><p>Nome:</p> <p>{item.name}</p></div>
                  <div className={`flex gap-2`}><p>Email:</p> <a className={`text-blue-600`} href={`mailto: ${item.email}`}>{item.email}</a></div>
                  <div className={`flex gap-2`}><p>Mensagem:</p><p>{item.message}</p></div> 
                </div>
              )
            })
          }
        </div>
      : null}
    </div>
  );
}
