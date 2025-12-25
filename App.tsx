
import React, { useState, useEffect } from 'react';
import { DEFAULT_CLINIC_DATA } from './constants';
import { ClinicData } from './types';
import ModernizerModal from './components/ModernizerModal';

// --- Sub-components defined here to keep logic clean ---

const Navbar: React.FC<{ onOpenModernizer: () => void }> = ({ onOpenModernizer }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-black text-xl">PF</div>
          <span className="font-bold text-xl tracking-tight">PhysioFlow</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-teal-600 transition-colors">Our Team</a>
          <a href="#facilities" className="hover:text-teal-600 transition-colors">Facility</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenModernizer}
            className="hidden sm:block text-xs font-bold uppercase tracking-widest text-teal-600 border border-teal-600 px-4 py-2 rounded-full hover:bg-teal-50 transition-colors"
          >
            AI Redesign
          </button>
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-teal-600/20 hover:scale-105 transition-transform">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC<{ data: ClinicData }> = ({ data }) => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50 -z-10 rounded-bl-[100px] hidden lg:block" />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-in slide-in-from-left duration-700">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-bold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          Next Available: Today at 2:30 PM
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
          {data.name}
        </h1>
        <p className="text-xl text-slate-600 max-w-lg">
          {data.tagline} {data.about.split('.')[0]}. Experience a science-backed approach to healing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-teal-600/25 hover:bg-teal-700 transition-all transform hover:-translate-y-1">
            Start Your Recovery
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-bold text-lg border border-slate-200 shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Watch Patient Stories
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
          <div>
            <div className="text-3xl font-bold text-teal-600">5k+</div>
            <div className="text-sm text-slate-500 font-medium">Happy Patients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600">15+</div>
            <div className="text-sm text-slate-500 font-medium">Expert Years</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600">4.9/5</div>
            <div className="text-sm text-slate-500 font-medium">Google Review</div>
          </div>
        </div>
      </div>
      <div className="relative animate-in slide-in-from-right duration-700">
        <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative group">
          <img 
            src="https://picsum.photos/seed/physiohero/800/1000" 
            alt="Physiotherapy Session" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 max-w-xs animate-bounce">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <div className="font-bold text-slate-900">Certified Experts</div>
            <div className="text-xs text-slate-500 uppercase tracking-tighter">All staff DPT level</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services: React.FC<{ data: ClinicData }> = ({ data }) => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Comprehensive Treatment Solutions</h3>
        <p className="text-slate-600">We don't just treat symptoms. We find the root cause of your discomfort and build a roadmap to sustainable health.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.treatments.map((t, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-teal-200 hover:bg-white hover:shadow-xl hover:shadow-teal-600/5 transition-all group">
            <div className="w-14 h-14 bg-teal-600/10 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{t.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team: React.FC<{ data: ClinicData }> = ({ data }) => (
  <section id="about" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">The Specialists</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Driven by Clinical Excellence</h3>
        </div>
        <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-colors">
          View All Credentials
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {data.doctors.map((doc, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-lg transition-all">
            <div className="w-full md:w-48 aspect-square rounded-2xl overflow-hidden shrink-0">
              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-1">{doc.specialty}</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-1">{doc.name}</h4>
              <div className="text-slate-400 font-medium text-sm mb-4 italic">{doc.credentials}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{doc.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Facilities: React.FC<{ data: ClinicData }> = ({ data }) => (
  <section id="facilities" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
         <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/fac1/600/400" className="rounded-3xl shadow-lg transform translate-y-8" alt="Clinic Interior" />
            <img src="https://picsum.photos/seed/fac2/600/400" className="rounded-3xl shadow-lg" alt="Treatment Area" />
            <img src="https://picsum.photos/seed/fac3/600/400" className="rounded-3xl shadow-lg transform -translate-y-4" alt="Equipment" />
            <img src="https://picsum.photos/seed/fac4/600/400" className="rounded-3xl shadow-lg transform translate-y-4" alt="Waiting Lounge" />
         </div>
         <div className="space-y-8">
            <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm">Our Facility</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">Designed for Healing and High Performance</h3>
            <p className="text-slate-600 text-lg">Every square inch of our clinic is engineered to support your recovery. From ultra-private consultation suites to our Olympic-grade performance gym.</p>
            <ul className="grid gap-4">
              {data.facilities.map((f, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 font-semibold group">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
         </div>
       </div>
    </div>
  </section>
);

const Contact: React.FC<{ data: ClinicData }> = ({ data }) => (
  <section id="contact" className="py-24 bg-teal-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
       <svg width="400" height="400" viewBox="0 0 400 400"><circle cx="400" cy="0" r="400" fill="white" /></svg>
    </div>
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm">Get in Touch</h2>
          <h3 className="text-5xl font-extrabold leading-tight">Ready to feel like yourself again?</h3>
          <p className="text-teal-50/70 text-lg">We typically respond to new patient inquiries within 2 hours during business hours.</p>
          
          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <div className="font-bold text-lg">Find Us</div>
                <div className="text-teal-50/60">{data.contact.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <div className="font-bold text-lg">Direct Line</div>
                <div className="text-teal-50/60">{data.contact.phone}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="font-bold text-lg">Hours</div>
                <div className="text-teal-50/60">{data.contact.openingHours}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 text-slate-900 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" placeholder="(555) 000-0000" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">Primary Concern</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none">
                <option>Back / Neck Pain</option>
                <option>Sports Injury</option>
                <option>Post-Surgery Recovery</option>
                <option>General Well-being</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">Message (Optional)</label>
              <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none h-32 resize-none" placeholder="Tell us about your condition..."></textarea>
            </div>
            <button className="w-full py-4 bg-teal-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-all">
              Request Call Back
            </button>
            <p className="text-center text-xs text-slate-400">By clicking, you agree to our Terms of Service & Privacy Policy.</p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC<{ data: ClinicData }> = ({ data }) => (
  <footer className="py-12 bg-slate-900 text-slate-400">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center text-white font-bold">PF</div>
        <span className="font-bold text-white text-lg tracking-tight">{data.name}</span>
      </div>
      <div className="flex gap-8 text-sm">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        <a href="#" className="hover:text-white transition-colors">Patient Portal</a>
      </div>
      <div className="text-sm">
        © 2025 {data.name}. Built with PhysioFlow AI.
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

export default function App() {
  const [clinicData, setClinicData] = useState<ClinicData>(DEFAULT_CLINIC_DATA);
  const [isModernizerOpen, setIsModernizerOpen] = useState(false);

  // Smooth scroll handler for anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')!.substring(1);
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen selection:bg-teal-100 selection:text-teal-900">
      <Navbar onOpenModernizer={() => setIsModernizerOpen(true)} />
      
      <main>
        <Hero data={clinicData} />
        <Services data={clinicData} />
        <Team data={clinicData} />
        <Facilities data={clinicData} />
        <Contact data={clinicData} />
      </main>

      <Footer data={clinicData} />

      {isModernizerOpen && (
        <ModernizerModal 
          onUpdate={(newData) => {
            setClinicData(newData);
            setIsModernizerOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onClose={() => setIsModernizerOpen(false)}
        />
      )}

      {/* Modernizer Sticky Trigger for Mobile/Always-access */}
      <button 
        onClick={() => setIsModernizerOpen(true)}
        className="fixed bottom-6 right-6 z-30 w-14 h-14 bg-teal-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all lg:hidden"
        title="Redesign with AI"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </button>
    </div>
  );
}
