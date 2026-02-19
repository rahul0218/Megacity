import React, { useState, useMemo } from 'react';
import { Building2, GraduationCap, Search, Clock } from 'lucide-react';

interface Doctor {
    name: string;
    degree: string;
    opdTiming: string;
    hospital: string;
}

interface Specialty {
    category: string;
    doctors: Doctor[];
}

const specialties: Specialty[] = [
    {
        category: 'Anesthesiology',
        doctors: [
            { name: 'Dr. Chirantan Saha', degree: 'MBBS, DA', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Avik Mukherjee', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Suman Paul Chowdhury', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Indradip Sanyal', degree: 'MBBS, DA, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Chest',
        doctors: [
            { name: 'Dr. Chandan Halder', degree: 'MBBS, MD (Chest)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Kausik Chaudhuri', degree: 'MBBS, DIP. Card, DTDC (WBUHS), WBHS', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Dermatology',
        doctors: [
            { name: 'Dr. S. C. Poddar', degree: 'MBBS, MD (Paed)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Surabhi Sharma', degree: 'MBBS (Hon), MD (Derma)', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Gastroenterology',
        doctors: [
            { name: 'Dr. Jayanta Paul', degree: 'MBBS, MD, DNB', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Awanish Tewari', degree: 'MBBS, MD (Medicine), DM (Gastroenterology)', opdTiming: 'By Appointment', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Sydip Auddy', degree: 'MBBS, D.T.M.H.', opdTiming: 'Sunday 9:30 A.M.', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'General Medicine',
        doctors: [
            { name: 'Dr. Manjit Kumar', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Prabir Kr Kar', degree: 'MBBS (Cal), ACMDC, CCEBDM, RCGP', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Sushanta Chakraborty', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Koushik Mishra', degree: 'MBBS, DCH, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Sanjeev Kumar', degree: 'MBBS, DA, DIP. CARD, DIP in Endocrinology', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Dipankar Saha', degree: 'MBBS, PGFEM, MEM', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. K. B. Roy', degree: 'MBBS, DNB (1)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Debasish Sadhukhan', degree: 'MBBS, MD (Medicine)', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'General & Laparoscopic Surgery',
        doctors: [
            { name: 'Dr. Jahar Lal Banerjee', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Swapan Kumar Roy', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Monoranjan Ghosh', degree: 'MBBS, MS, MCH', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Anuj Kanti Poddar', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Subhadip Halder', degree: 'MBBS, MS (Gen Surg.)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. P. P. Mondal', degree: 'MBBS, MS (Gen Surg.)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. S. S. Dutta Roy', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Sourav Chakraborty', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Madan Mohan Mukherjee', degree: 'MBBS, MS (Gen Surg.)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Niloy Narayan Sarkar', degree: 'MBBS, MS', opdTiming: 'By Appointment', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Puja Ganguly', degree: 'MBBS, MS', opdTiming: 'Saturday 1:30 P.M.', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Gynecology',
        doctors: [
            { name: 'Dr. Ashish Kumar Dhar', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. G. K. Ghatak', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Goutam Bera', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Ratna Chatterjee', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Anjana Mukherjee', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Arindam Majumder', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Shovan Banerjee', degree: 'MBBS, DGO, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Dilip Kr. Samanta', degree: 'MBBS, DGO, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Biplab Pal', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Dona Majumder', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Paromita Srimani', degree: 'MBBS, DGO', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Shaktirupa Ghosh', degree: 'MBBS, DGO, DNB (O & G - New Delhi)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Shefali Banerjee', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Siuli Choudhury', degree: 'MBBS, DGO', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Sudip Chattopadhyay', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Sukumar Chatterjee', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Susanta Paul', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Taptajita Paria', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Krishnendu Goswami', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. H.K. Thakoor', degree: 'MBBS, DGO', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Sanchita Roy', degree: 'MBBS, MS', opdTiming: 'Saturday 9:00 A.M.', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Medicine & Cardiology',
        doctors: [
            { name: 'Dr. Basudeb Das', degree: 'MD (Medicine & Cardio)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Debi Datta', degree: 'MBBS, DIP. Card', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Kausik Chaudhuri', degree: 'MBBS, DIP. Card, DTDC (WBUHS), WBHS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Shyamal Kumar Saha', degree: 'MBBS, PGDCC (CARD)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Bibondra Nath Talapatra', degree: 'MBBS, DNB (Gen. Medicine), DNB (Geriology)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Priyadarshi Bagchi', degree: 'MBBS, MD (Internal Medicine), DNB, DM (Cardiology)', opdTiming: 'Every Saturday 8:00 A.M.', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Nephrology',
        doctors: [
            { name: 'Dr. Sunil Kumar', degree: 'MBBS, DM (Nephrology)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Gobardhan Gupta', degree: 'MBBS, DNB (General Medicine) DNB (Nephrology), MNAMS (New Delhi)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Rajarshi Dutta', degree: 'MBBS, DM (Nephrology)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Pinaki Mukhopadhyay', degree: 'MBBS, MD, DM (Nephrology), PGI (Chandigarh)', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Neurology',
        doctors: [
            { name: 'Dr. Sunil Kumar', degree: 'MBBS, DM, Neuro', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Nabin Sarkar', degree: 'MBBS, MD (Medicine, DM (Neurology)', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Neuro-Surgery',
        doctors: [
            { name: 'Dr. Asok Kumar Acharyya', degree: 'MBBS, D. Ortho, MS (Anatomy) MS (General Surgery), Mch (Neuro-Surgery)', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Oncology',
        doctors: [
            { name: 'Dr. Mahfuz Arif', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Partha Mukhopadhyay', degree: 'MBBS, DNB', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Orthopedics',
        doctors: [
            { name: 'Dr. Sujit Kumar Sen', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Samarendra Das', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Dibyendu Biswas', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Arindam Majumder', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Md. Selim Saikh', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Chaitanya Halder', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Sandeep J. Raj', degree: 'MBBS, D. Ortho', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Kiran Sankar Roy', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Rakesh Kr Daripa', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Otolaryngology / E.N.T.',
        doctors: [
            { name: 'Dr. D. P. Parekh', degree: 'MBBS, DGO (Cal) MS (ENT)', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Jayanta Saha', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. S. C. Halder', degree: 'MBBS, MS', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Pediatrics',
        doctors: [
            { name: 'Prof. Dr. Prabhati Banerjee', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Anil Kumar Ghosh', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. S. C. Poddar', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Timir Baran Garai', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Tarun Kumar Sarkar', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Debasish Das', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Pranabesh Ghosh', degree: 'MBBS, DCH', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Somnath Banerjee', degree: 'MBBS, DCH', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Kunal Bhawal', degree: 'MBBS, DCH, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Radiology & Imaging',
        doctors: [
            { name: 'Dr. Anik Datta', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Susanta Sarkar', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. S. N. Paul', degree: 'MBBS, MD', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Urology',
        doctors: [
            { name: 'Dr. Debasish Samadder', degree: 'MBBS, MS, MCh', opdTiming: '', hospital: 'Megacity Nursing Home' },
            { name: 'Dr. Nabankur Ghosh', degree: 'MBBS, MS, MRCS, MNAMS, MCh - Urology', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
    {
        category: 'Vascular Surgery',
        doctors: [
            { name: 'Dr. Sourav Paik', degree: 'MCH (Cardio Thoracic & Vascular Surgery) IPGMER', opdTiming: '', hospital: 'Megacity Nursing Home' },
        ]
    },
];

const DoctorCard: React.FC<{ doctor: Doctor; category: string }> = ({ doctor, category }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {category}
                </span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">{doctor.name}</h4>
            <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-600 font-medium">{doctor.degree}</span>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-50">
                {doctor.opdTiming && (
                    <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">OPD Timing</p>
                            <p className="text-sm text-gray-700">{doctor.opdTiming}</p>
                        </div>
                    </div>
                )}


                <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Hospital</p>
                        <p className="text-sm text-gray-700">{doctor.hospital}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Doctors: React.FC<{ mode?: 'grid' | 'carousel' }> = ({ mode = 'grid' }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const formattedDoctors = useMemo(() => {
        return specialties.flatMap(specialty =>
            specialty.doctors.map(doctor => ({
                ...doctor,
                category: specialty.category
            }))
        );
    }, []);

    const filteredDoctors = useMemo(() => {
        if (mode === 'carousel') return formattedDoctors; // Show all or a subset in carousel, ignoring search

        const query = searchQuery.toLowerCase();
        return formattedDoctors.filter(doctor =>
            doctor.name.toLowerCase().includes(query) ||
            doctor.category.toLowerCase().includes(query) ||
            doctor.degree.toLowerCase().includes(query)
        );
    }, [formattedDoctors, searchQuery, mode]);

    return (
        <div className="py-24 sm:py-32 bg-white" id="doctors">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display mb-4">
                        Our Expert Doctors
                    </h2>
                    <p className="text-lg leading-8 text-gray-600 mb-8">
                        Dedicated specialists providing comprehensive care across all departments.
                    </p>

                    {/* Search Bar - Only show in grid mode */}
                    {mode === 'grid' && (
                        <div className="max-w-xl mx-auto relative">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full rounded-md border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    placeholder="Search doctors by name, specialty, or degree..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {filteredDoctors.length > 0 ? (
                    mode === 'carousel' ? (
                        <div className="flex overflow-x-auto pb-8 gap-6 snap-x">
                            {filteredDoctors.slice(0, 10).map((doctor, index) => ( // Show top 10 in carousel
                                <div key={index} className="min-w-[300px] snap-center">
                                    <DoctorCard
                                        doctor={doctor}
                                        category={doctor.category}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredDoctors.map((doctor, index) => (
                                <DoctorCard
                                    key={index}
                                    doctor={doctor}
                                    category={doctor.category}
                                />
                            ))}
                        </div>
                    )
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No doctors found matching your search.</p>
                    </div>
                )}
                {mode === 'carousel' && (
                    <div className="text-center mt-8">
                        <a href="/doctors" className="text-primary font-semibold hover:text-primary-hover">View All Doctors &rarr;</a>
                    </div>
                )}
            </div>
        </div>
    );
};
