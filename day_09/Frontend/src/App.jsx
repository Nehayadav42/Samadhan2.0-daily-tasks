import React, { useState, useEffect } from 'react';

// This is a simple SVG icon for the search input
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);


// This component represents a single student card
function StudentCard({ student }) {
    return (
        <div className="student-card">
            <div className="student-card-content">
                <img 
                    className="student-avatar" 
                    src={student.avatar} 
                    alt={`${student.name}'s avatar`}
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/cccccc/333333?text=Error'; }}
                />
                <div>
                    <h3 className="student-name">{student.name}</h3>
                    <p className="student-major">{student.major}</p>
                    <p className="student-year">Class of {student.year}</p>
                </div>
            </div>
        </div>
    );
}

// Local mock data for fallback if the server isn't running
const mockStudents = [
  { id: 1, name: 'Alice Johnson (Local)', major: 'Computer Science', year: 2025, avatar: 'https://placehold.co/100x100/A8D5BA/333333?text=AJ' },
  { id: 2, name: 'Bob Williams (Local)', major: 'Electrical Engineering', year: 2024, avatar: 'https://placehold.co/100x100/FEE4A0/333333?text=BW' },
];


// The main App component
export default function App() {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [newStudentName, setNewStudentName] = useState('');
    const [newStudentMajor, setNewStudentMajor] = useState('');
    const [newStudentYear, setNewStudentYear] = useState('');
    const [formError, setFormError] = useState('');
    
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/students');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudents(data);
            } catch (err) {
                console.error('Fetch error:', err);
                setError('Could not connect to backend. Displaying local data. Is the server running?');
                setStudents(mockStudents); 
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []); 

    const handleAddStudent = async (e) => {
        e.preventDefault(); 
        
        if (!newStudentName || !newStudentMajor || !newStudentYear) {
            setFormError('All fields are required.');
            return;
        }

        const newStudentData = {
            name: newStudentName,
            major: newStudentMajor,
            year: parseInt(newStudentYear) 
        };

        try {
            const response = await fetch('http://localhost:3001/api/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newStudentData),
            });

            if (!response.ok) {
                throw new Error('Failed to add student');
            }

            const addedStudent = await response.json();
            setStudents([...students, addedStudent]); 

            setNewStudentName('');
            setNewStudentMajor('');
            setNewStudentYear('');
            setFormError('');

        } catch (err) {
            console.error('Submit error:', err);
            setFormError('Server offline. Student added to local view only.');
            
            const localStudent = {
                ...newStudentData,
                id: Date.now(),
                avatar: `https://placehold.co/100x100/E0E0E0/333333?text=${newStudentData.name.substring(0, 2).toUpperCase()}`,
            };
            setStudents([...students, localStudent]);

            setNewStudentName('');
            setNewStudentMajor('');
            setNewStudentYear('');
        }
    };

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.major.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <style>{`
                /* --- General Body & Font Styles --- */
                body {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                      sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    background-color: #f8fafc; /* slate-50 */
                    color: #1e293b; /* slate-800 */
                }

                /* --- App Container --- */
                .app-container {
                    min-height: 100vh;
                }

                /* --- Header Styles --- */
                .app-header {
                    background-color: white;
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                }

                .container {
                    max-width: 1280px;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 1rem 1.5rem;
                }
                
                .header-container {
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                }

                .main-title {
                    font-size: 1.875rem;
                    line-height: 2.25rem;
                    font-weight: 700;
                    text-align: center;
                    background-image: linear-gradient(to right, #3b82f6, #14b8a6);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }

                .subtitle {
                    text-align: center;
                    color: #64748b; /* slate-500 */
                    margin-top: 0.25rem;
                }

                /* --- Main Content --- */
                .main-content {
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                }

                /* --- Form & Input Styles --- */
                .form-container, .search-container-wrapper {
                    max-width: 32rem; /* max-w-lg */
                    margin-left: auto;
                    margin-right: auto;
                    background-color: white;
                    padding: 1.5rem;
                    border-radius: 0.75rem; /* rounded-xl */
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); /* shadow-md */
                    margin-bottom: 2.5rem; /* mb-10 */
                }

                .form-title {
                    font-size: 1.5rem; /* text-2xl */
                    font-weight: 700;
                    margin-bottom: 1rem;
                }

                .form-element {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .form-input {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem; /* rounded-lg */
                    background-color: #f1f5f9; /* bg-slate-100 */
                    border: 1px solid #e2e8f0; /* border-slate-200 */
                    box-sizing: border-box; /* Ensures padding doesn't affect width */
                }

                .form-input:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px #60a5fa; /* ring-2 focus:ring-blue-400 */
                }

                .submit-button {
                    width: 100%;
                    background-color: #3b82f6; /* bg-blue-500 */
                    color: white;
                    font-weight: 700;
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    border: none;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .submit-button:hover {
                    background-color: #2563eb; /* hover:bg-blue-600 */
                }

                .form-error {
                    color: #ea580c; /* text-orange-500 */
                    font-size: 0.875rem;
                    text-align: center;
                }


                /* --- Search Bar --- */
                .search-container {
                    position: relative;
                     max-width: 32rem;
                    margin: 0 auto 2rem;
                }

                .search-input {
                    width: 100%;
                    padding: 0.75rem 1rem 0.75rem 2.5rem; /* pl-10 pr-4 py-3 */
                    border-radius: 9999px; /* rounded-full */
                    background-color: white;
                    border: 1px solid #cbd5e1; /* border-slate-300 */
                    box-sizing: border-box;
                }
                .search-input:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px #60a5fa; /* focus:ring-2 focus:ring-blue-400 */
                    border-color: transparent;
                }


                /* --- Loading & Error States --- */
                .feedback-text {
                    text-align: center;
                    color: #64748b; /* slate-500 */
                }

                .error-message {
                    text-align: center;
                    background-color: #fee2e2; /* bg-red-100 */
                    border: 1px solid #f87171; /* border-red-400 */
                    color: #b91c1c; /* text-red-700 */
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    max-width: 48rem; /* max-w-2xl */
                    margin: 0 auto 1.5rem;
                }

                .error-message strong {
                    font-weight: 700;
                }


                /* --- Student Grid & Cards --- */
                .student-grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 2rem;
                }

                .student-card {
                    background-color: white;
                    border-radius: 0.75rem; /* rounded-xl */
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* shadow-lg */
                    overflow: hidden;
                    transition: all 0.3s ease-in-out;
                }

                .student-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); /* shadow-2xl */
                }

                .student-card-content {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem; /* space-x-5 */
                    padding: 1.5rem;
                }

                .student-avatar {
                    height: 5rem; /* h-20 */
                    width: 5rem; /* w-20 */
                    border-radius: 9999px; /* rounded-full */
                    border: 4px solid #f1f5f9; /* border-slate-100 */
                }

                .student-name {
                    font-size: 1.25rem; /* text-xl */
                    font-weight: 700;
                }

                .student-major {
                    color: #475569; /* text-slate-600 */
                }

                .student-year {
                    color: #94a3b8; /* text-slate-400 */
                    font-size: 0.875rem; /* text-sm */
                    margin-top: 0.25rem;
                }

                /* --- Responsive Grid Layout --- */
                @media (min-width: 640px) {
                    .student-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .student-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            `}</style>
            <div className="app-container">
                <header className="app-header">
                    <div className="container header-container">
                        <h1 className="main-title">
                            🎓 Student Directory
                        </h1>
                        <p className="subtitle">Day 9: useEffect & Fetch API</p>
                    </div>
                </header>

                <main className="container main-content">
                    <div className="form-container">
                        <h2 className="form-title">Add a New Student</h2>
                        <form onSubmit={handleAddStudent} className="form-element">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={newStudentName}
                                onChange={(e) => setNewStudentName(e.target.value)}
                                className="form-input"
                            />
                            <input
                                type="text"
                                placeholder="Major"
                                value={newStudentMajor}
                                onChange={(e) => setNewStudentMajor(e.target.value)}
                                className="form-input"
                            />
                            <input
                                type="number"
                                placeholder="Graduation Year"
                                value={newStudentYear}
                                onChange={(e) => setNewStudentYear(e.target.value)}
                                className="form-input"
                            />
                            <button type="submit" className="submit-button">
                                Add Student
                            </button>
                            {formError && <p className="form-error">{formError}</p>}
                        </form>
                    </div>
                    
                    <div className="search-container">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search by name or major..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    {loading && <p className="feedback-text">Loading students...</p>}
                    
                    {error && (
                        <div className="error-message">
                            <strong>Connection Error:</strong>
                            <span> {error}</span>
                        </div>
                    )}

                    {!loading && (
                        <div className="student-grid">
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map(student => (
                                    <StudentCard key={student.id} student={student} />
                                ))
                            ) : (
                                <p className="feedback-text">No students found.</p>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}

