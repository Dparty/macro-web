
import Image from 'next/image';

const LogoSection = () => {
  return (

    <div className="container mt-24 mx-auto px-12 py-4">

      <section id="logo">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          我們的合作夥伴
        </h2>


        <div className="pt-2 pb-2">
          <div className="flex overflow-hidden space-x-16 mt-32">
            <div className="flex space-x-16 animate-loop-scroll">
              <Image loading="lazy" src="/images/logo.tencent.svg" height={330} width={330} className="max-w-none" alt="Image 1" />
              <Image loading="lazy" src="/images/fortune.png" height={180} width={180} className="max-w-none" alt="Image 2" />
              <Image loading="lazy" src="/images/heshi.png" height={180} width={180} className="max-w-none" alt="Image 3" />
              <Image loading="lazy" src="/images/grantit.jpg" height={180} width={280} className="max-w-none" alt="Image 4" />
              <Image loading="lazy" src="/images/feie.png" height={180} width={530} className="max-w-none" alt="Image 5" />

              {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 2" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 3" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 4" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 5" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 6" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 7" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 8" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 9" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 10" /> */}
            </div>
            <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
              <Image loading="lazy" src="/images/logo.tencent.svg" height={330} width={330} className="max-w-none" alt="Image 1" />
              <Image loading="lazy" src="/images/fortune.png" height={180} width={180} className="max-w-none" alt="Image 2" />
              <Image loading="lazy" src="/images/heshi.png" height={180} width={180} className="max-w-none" alt="Image 3" />
              <Image loading="lazy" src="/images/grantit.jpg" height={180} width={280} className="max-w-none" alt="Image 4" />
              {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 1" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 2" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 3" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 4" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 5" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 6" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 7" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 8" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 9" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 10" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoSection;
