import showroomImage from "@/assets/Main-Shop.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 stone-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="slide-in-left">
            <div className="mb-6">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">
                Our Heritage
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mt-2 mb-6">
                Crafting Excellence in Stone
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                For over three decades, Shri Shankar Marble House has been the cornerstone 
                of premium stone craftsmanship in our community. Founded with a vision to 
                bring the finest marble and granite to every home and commercial space.
              </p>
              
              <p>
                <span className="text-gold font-medium">Our specialty is precision custom cutting services.</span> We don't just sell stone - we transform it to your exact specifications. 
                Our expertise spans across a diverse collection of natural stones, from the 
                pristine whites to the bold elegance of premium granite, all available with professional custom cutting.
              </p>
              
              <p>
                <span className="text-gold font-medium">Every dimension, every specification - we deliver precision results.</span> 
                Whether you're designing a luxury kitchen, an elegant bathroom, or a 
                commercial space that makes a statement, our custom cutting expertise ensures 
                the perfect fit for your vision.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Custom Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Stone Varieties</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="slide-in-right">
            <div className="relative">
              <img 
                src={showroomImage} 
                alt="Shri Shankar Marble House Showroom" 
                className="rounded-2xl shadow-large w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;