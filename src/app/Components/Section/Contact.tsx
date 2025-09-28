import React, { useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import LinkGroup from '../UI/LinkGroup/LinkGroup';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchProfile, selectProfile, selectProfileStatus } from '@/store/profileSlice';
import WhatsAppQRCard from '../QRCard/WhatsAppQRCard';

export const Contact: React.FC = () => {
    const dispatch = useAppDispatch();
    const profile = useAppSelector(selectProfile);
    const status = useAppSelector(selectProfileStatus);

    useEffect(() => {
        if (status === 'idle') dispatch(fetchProfile());
    }, [status, dispatch]);

    const social = profile?.socialMediaLink ?? {};

    return (
        <section id="contact" className="relative py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-base lg:text-lg">
                        Ready to start your next project? Let's discuss how we can work together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Let's Connect</h3>

                        {/* Optional: small loading/fallback */}
                        {status === 'loading' && (
                            <p className="text-white/70">Loading profile…</p>
                        )}

                        <div className="space-y-8">
                            <div className="flex items-center group hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                                    <Mail className="text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-base lg:text-lg">Email</p>
                                    <p className="text-white/70 text-sm lg:text-base">
                                        {profile?.email ?? 'info@sivamani.me'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center group hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                                    <Phone className="text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-base lg:text-lg">Phone</p>
                                    <p className="text-white/70 text-sm lg:text-base">
                                        {profile?.mobileNo ?? '+91 7373288133'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center group hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                                    <MapPin className="text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-base lg:text-lg">Location</p>
                                    <p className="text-white/70 text-sm lg:text-base">
                                        {profile?.contactInfo ? `${profile.contactInfo}` : 'Tamil Nadu, India'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-12">
                            <LinkGroup
                                socialLinks={{
                                    facebook: social.facebook,
                                    linkedin: social.linkedin,
                                    instagram: social.instagram,
                                    github: social.github,
                                }}
                            />
                        </div>
                    </div>
                    <section id="whatsapp-qr">
                        <WhatsAppQRCard
                            name="sivamani"
                            phoneE164="+917373288133"
                        />
                    </section>
                </div>
            </div>
        </section>
    );
};
