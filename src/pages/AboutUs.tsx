export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#FAFAF3] text-[#002F6C] font-serif px-6 md:px-20 py-16">
      <section className="max-w-5xl mx-auto space-y-14">

        {/* We Are HoH */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">We Are Humans of Hospitality</h2>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Humans of Hospitality (HoH) is more than a content platform — it’s a cultural movement built to honour the people who make the industry what it is. From chefs and bartenders to cleaners, delivery riders, and founders — we tell the stories that rarely get told.
          </p>
          <p className="text-lg leading-relaxed text-justify mb-4">
            We exist to humanise, educate, and elevate the world of hospitality — by giving voice to those who keep it alive. The frontline servers. The dream-chasing students. The visionary entrepreneurs. The ones who hold this industry together, often without recognition.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            At HoH, we believe hospitality isn’t “just service.” It’s pressure, passion, pride — and people.
          </p>
        </div>

        {/* Why We Exist */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Why We Exist</h2>
          <p className="text-lg leading-relaxed text-justify mb-4">
            In most of the world, hospitality workers are everywhere — yet invisible. They’re known by title, not by name. Celebrated for what they do, not who they are.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            We’re here to change that. Because every shift has a story. Every apron hides a journey. And every guest experience is powered by a human life behind the scenes.
          </p>
        </div>

        {/* What We Do */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 mb-4">
            <li>We share real stories — raw, emotional, and unfiltered.</li>
            <li>We break stereotypes — hospitality is not “low skill.” It’s leadership, grit, and heart.</li>
            <li>We build community — one voice, one city, one country at a time.</li>
            <li>We inspire and educate — through reels, blogs, podcasts, and learning platforms.</li>
          </ul>
          <p className="text-lg leading-relaxed text-justify">
            Our vision is to build a global home where hospitality’s emotional truth lives — a space where someone in Pune can relate to a story from Leeds. Where a Michelin-starred chef is respected for their climb — and a midnight dishwasher for their resilience.
          </p>
        </div>

        {/* Our Oath */}
        <div className="border-t pt-8 border-gray-300">
          <h2 className="text-2xl font-semibold mb-3">Our Oath</h2>
          <p className="text-lg leading-relaxed text-justify">
            Every story we tell, every voice we feature, must walk away with more dignity than they came in with. If we can’t offer that — we don’t deserve to tell it.
          </p>
        </div>

        {/* Our Values - Left Aligned */}
        <div className="bg-[#F0F4F8] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg leading-relaxed">
            <div>
              <strong>Dignity First:</strong> Every person featured deserves to walk away feeling respected, not reduced.
            </div>
            <div>
              <strong>Truth Over Trends:</strong> We tell honest stories — not curated soundbites for algorithms.
            </div>
            <div>
              <strong>Representation With Respect:</strong> We aim to represent every voice with care, especially those unheard.
            </div>
            <div>
              <strong>Purpose Before Popularity:</strong> We grow this platform with integrity — not at the cost of our people or message.
            </div>
            <div>
              <strong>Learning Through Listening:</strong> Every story is a lesson. Every storyteller, a teacher.
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
