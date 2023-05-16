const AboutUs = () => {
  return (
    <div className="lg:flex items-center lg:mt-32 grid mt-20 gap-20">
      {/* img */}
      <div className="relative max-w-xl h-[473px]">
  <img
    className="rounded-lg w-full"
    src="https://i.postimg.cc/sXFCtXXp/person.jpg"
    alt=""
  />
  <div className="p-3 absolute -bottom-10 -right-10 bg-white rounded-lg">
    <img 
      className="w-[327px]"
      src="https://i.postimg.cc/Cx108XXf/parts.jpg"
      alt=""
    />
  </div>
</div>


      {/* texts */}
      <div>
        {/* section header */}
        <div>
          <h5 className="font-bold md:text-lg text-sm mb-5 text-[#FF3811]">
            About Us
          </h5>
          <h2 className="font-bold  lg:text-5xl md:text-3xl text-xl leading-8">
  We are qualified &amp; of experience in this field
</h2>

        </div>
        <div className="lg:text-base text-sm grid gap-[20px] max-w-md text-[#737373] my-7">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don&apos;t look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don&apos;t look even slightly
            believable.
          </p>
        </div>
        <button className="btn">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutUs;
