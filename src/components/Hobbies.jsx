import YoutubeEmbed from "./YoutubeEmbed";
import { FaBandcamp } from "react-icons/fa6";
import { FaSoundcloud } from "react-icons/fa";

const Hobbies = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                Hobbies
            </h1>

            <h1 className="my-20 text-center text-2xl">
                Meus principais hobbies são a música e o café
            </h1>

            <div className="flex justify-center">
                <YoutubeEmbed embedId="8xUsJiEtUPI" />
            </div>

            <h1 className="my-20 text-center text-2xl">
                Abaixo estão os álbuns e EPs que produzi sob o nome de "Pluck"
            </h1>

            <div className="flex justify-center">
                <YoutubeEmbed embedId="T59lmNOxEto" />
                <YoutubeEmbed embedId="jiJbQgIfnAY" />
            </div> 
            <div className="flex justify-center">
                <YoutubeEmbed embedId="zJuPCD9N7Bo" />
                <YoutubeEmbed embedId="3mqIlVf2LNQ" />
            </div> 

            <h1 className="my-20 text-center text-2xl">
                Você pode me encontrar também no Soundcloud e no Bandcamp
            </h1>

            <div className="my-16 flex items-center justify-center gap-4 text-4xl">
                <FaSoundcloud />
                <FaBandcamp />
            </div>


        </div>
    )
}

export default Hobbies
