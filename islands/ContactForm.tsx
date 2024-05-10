import type { ImageWidget } from "apps/admin/widgets.ts";
import { useRef } from "preact/hooks";
import { useUser } from "apps/vtex/hooks/useUser.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";

interface Props {
}

const submitHandler = function (event) {
  event.preventDefault();
};
export default function ContactForm() {
  const { user } = useUser();
  console.log("Usuário: ", user);
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
        {window.location.href}
      </form>
    </div>
  );
}
