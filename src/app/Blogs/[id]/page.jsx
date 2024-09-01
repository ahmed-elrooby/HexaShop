import Image from 'next/image';
import React from 'react';

const getData = async ({ params }) => {
  try {
    const data = await fetch(`https://dummyjson.com/products/${params.id}?populate=*`)
      .then((res) => res.json());
    return data;
  } catch (err) {
    console.error("There is an error:", err);
  }
}

export async function generateMetadata({ params }) {
  const products = await getData({ params });

  return {
    title: products.title,
  };
}

const Details = async ({ params }) => {
  const products = await getData({ params });


  return <>
      <div className="h-full w-[90%] mx-auto my-[50px]">
      <div>
        <h1 className='font-bold text-[25px] text-[--primary]'>{products.title}</h1>
        <p className='leading-[2]'>{products.description}</p>
      </div>
      <div className="border border-[--primary] flex justify-center rounded-lg relative my-3 mx-auto">
        <Image
          src={products.thumbnail}
          width={400}
          height={200}
          className="object-cover"
          alt={products.title}
        />
        <span className="bg-[--primary] font-bold rounded-lg py-2 px-4 absolute top-2 left-2 text-white">
          ${products.price}
        </span>
        <span className="bg-[--primary] font-bold rounded-lg py-2 px-4 absolute bottom-2 right-2 text-white">
          {products.category}
        </span>
      </div>
      <div className="flex justify-center gap-1">
        {products.images?.map((img, idx) => (<div key={idx} className='flex flex-wrap items-center gap-[30px]'>
          <Image
            className="object-fit transition-all hover:bg-[--primary] border max-w-full border-[--primary] rounded-sm"
            key={idx}
            alt="img"
            src={img}
            width={200}
            height={200}
          />
        </div>
          
        ))}
      </div>
      <p className='pt-3 mt-4 text-[18px] leading-[26px] text-justify columns-2'>In the world of modern technology, software development stands as one of the most rapidly evolving fields. Every day, new tools and technologies emerge, aimed at improving software quality and speeding up the development process. Among these tools are frameworks that facilitate the creation of complex applications by providing a structured and flexible environment for developers. Continuous testing has become an essential part of the development process, ensuring that the code functions as expected without issues. This has led to an increasing demand for automated testing tools that allow developers to test their code regularly and efficiently.

However, with all these advancements comes a new challenge: managing large-scale software projects and ensuring effective collaboration among various teams. This is where project management systems and collaborative tools come into play, helping developers, designers, and project managers communicate effectively. Ultimately, the success of any software project hinges on good collaboration and effective organization among all team members.

Moreover, open-source software is becoming increasingly important in the realm of software development. Open-source projects provide a collaborative environment where developers from around the world can contribute to the development of software, improving its quality and broadening its usability.In the world of modern technology, software development stands as one of the most rapidly evolving fields. Every day, new tools and technologies emerge, aimed at improving software quality and speeding up the development process. Among these tools are frameworks that facilitate the creation of complex applications by providing a structured and flexible environment for developers. Continuous testing has become an essential part of the development process, ensuring that the code functions as expected without issues. This has led to an increasing demand for automated testing tools that allow developers to test their code regularly and efficiently.

However, with all these advancements comes a new challenge: managing large-scale software projects and ensuring effective collaboration among various teams. This is where project management systems and collaborative tools come into play, helping developers, designers, and project managers communicate effectively. Ultimately, the success of any software project hinges on good collaboration and effective organization among all team members.

Moreover, open-source software is becoming increasingly important in the realm of software development. Open-source projects provide a collaborative environment where developers from around the world can contribute to the development of software, improving its quality and broadening its usability.
</p>
    </div>
  </>
};

export default Details;
