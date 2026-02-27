import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';

const ContactCTA: React.FC = () => {
    const linkedIn = SOCIAL_LINKS.find(l => l.name === 'LinkedIn');

    return (
        <section className="py-12">
            <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif">
                    Let's Build Something Together
                </h2>
                <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-8">
                    I'm exploring PM roles in consumer tech and B2B SaaS. If you're building something interesting, I'd love to chat.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg text-sm font-semibold hover:bg-zinc-100 transition-colors"
                    >
                        <Mail size={16} />
                        {PERSONAL_INFO.email}
                    </a>
                    {linkedIn && (
                        <a
                            href={linkedIn.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700"
                        >
                            <Linkedin size={16} />
                            Connect on LinkedIn
                            <ArrowRight size={14} />
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
