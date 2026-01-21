import { useState } from 'react';
import { Upload as UploadIcon, FileText, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

function Upload() {
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resume:', resumeFile);
    console.log('Job Description:', jobDescription);
    navigate('/results');
  };
  return (  
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Upload Your Documents
          </h1>
          <p className="text-xl text-blue-800">
            Upload your resume and job description to get your ATS match score
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-30">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-blue-900" />
              <h3 className="text-2xl font-bold text-blue-900">
                Upload Resume
              </h3>
            </div>
            <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center cursor-pointer">
              <input
                type="file"
                id="resume-upload"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <UploadIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-900 font-semibold mb-2">
                  {resumeFile
                    ? resumeFile.name
                    : 'Click to upload or drag and drop'}
                </p>
                <p className="text-blue-700 text-sm">
                  PDF, DOC, or DOCX (Max 5MB)
                </p>
              </label>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-30">
            <div className="flex items-center space-x-3 mb-4">
              <Briefcase className="w-6 h-6 text-blue-900" />
              <h3 className="text-2xl font-bold text-blue-900">
                Job Description
              </h3>
            </div>
            <textarea
              className="w-full h-64 px-4 py-3 rounded-xl bg-white bg-opacity-50 border border-blue-300 text-blue-900 placeholder-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
          <div className="text-center">
            <Button type="submit" variant="primary" className="px-12">
              Analyze Resume
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload;
