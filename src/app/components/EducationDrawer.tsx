import * as Dialog from '@radix-ui/react-dialog';
import { GraduationCap, Award, X } from 'lucide-react';

interface EducationDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EducationDrawer({ open, onOpenChange }: EducationDrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 w-[90vw] max-w-3xl max-h-[85vh] overflow-y-auto animate-scale-in">
          <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <Dialog.Title className="text-2xl font-bold">
              Education & Certifications
            </Dialog.Title>
            <Dialog.Close className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          <div className="p-6">
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-xl">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                Education
              </h3>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="mb-2">
                  Bachelor of Technology in Computer Science
                </h4>
                <p className="text-slate-600 mb-2">
                  Chhattisgarh Swami Vivekanand Technical University • 2021 -
                  2025
                </p>
                <p className="text-slate-600 mb-3">CGPA: 7.1/10</p>
                <div className="mb-3">
                  <p className="font-semibold mb-2">Relevant Coursework:</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Data Structures & Algorithms
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Web Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Database Management Systems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Operating Systems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Object-Oriented Programming
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      Computer Networks
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-xl">
                <Award className="w-5 h-5 text-blue-500" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="mb-1">Full Stack Web Development</h4>
                  <p className="text-slate-600 mb-2">Udemy • 2024</p>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                    Completed
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="mb-1">
                    JavaScript Algorithms and Data Structures
                  </h4>
                  <p className="text-slate-600 mb-2">freeCodeCamp • 2023</p>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                    Completed
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="mb-1">React - The Complete Guide</h4>
                  <p className="text-slate-600 mb-2">Coursera • 2024</p>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                    Completed
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="mb-1">Git & GitHub Essentials</h4>
                  <p className="text-slate-600 mb-2">
                    LinkedIn Learning • 2023
                  </p>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                    Completed
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="mb-1">Responsive Web Design</h4>
                  <p className="text-slate-600 mb-2">freeCodeCamp • 2023</p>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                    Completed
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="mb-1">Node.js Backend Basics</h4>
                  <p className="text-slate-600 mb-2">Udemy • 2024</p>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
