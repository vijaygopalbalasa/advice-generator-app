'use client';

import Image from 'next/image'
import mobileDivider from '@/src/images/pattern-divider-mobile.svg';
import desktopDivider from '@/src/images/pattern-divider-desktop.svg';
import diceImg from '@/src/images/icon-dice.svg';
import { useQuery } from 'react-query';

type SlipData = {
  slip: {
    id: number;
    advice: string;
  }
}

export default function Home() {
  const api = `https://api.adviceslip.com/advice/${generateRandomNumber()}`;

  const { isLoading, data, refetch } = useQuery<SlipData>('adviceData', async () => {
    const res = await fetch(api)
    return await res.json();

  })

  function handleRefetch() {
    return refetch();
  }


  return <div className="font-manrope min-h-screen w-full p-8 bg-dark-blue flex sm:items-center pt-40 sm:pt-8 justify-center text-white">
    {/* Advice box */}
    <section className="h-fit relative pt-8 flex items-center flex-col bg-dark-grayish-blue rounded-xl w-[350px] sm:w[470px]">
      <p className="text-neon-green mb-6 font-semibold tracking-[3px] text-sm">
        ADVICE {data?.slip.id}
      </p>
      <section className="text-[28px] mb-5 text-center font-semibold text-light-cyan ">
        "{data?.slip.advice}"
      </section>

      {/* Divider */}

      <section className="mb-16">
        <Image className="sm:hidden" src={mobileDivider} alt="mobile-divider" />
        <Image className="hidden sm:flex" src={desktopDivider} alt="desktop-divider" />
      </section>

      <button onClick={handleRefetch} className="absolute -bottom-[30px] bg-neon-green h-16 w-16 flex items-center justify-center rounded-full cursor-pointer hover:shadow-custom-neo-glow">
        <Image src={diceImg} alt='dice-img' />
      </button>
    </section>
  </div>
}

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 224) + 1;
}