'use client';
import { Fragment } from 'react';
// @ts-ignore
import { Dialog, Transition } from '@headlessui/react';
// Note: You need to install @headlessui/react first:
// Run: npm install @headlessui/react

interface SkillModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    details: { name: string; level: number; projects: string[] }[];
}

export default function SkillModal({ isOpen, onClose, title, details }: SkillModalProps) {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-150"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-primary">
                                    {title}
                                </Dialog.Title>
                                <div className="mt-4 space-y-4">
                                    {details.map((item, index) => (
                                        <div key={item.name + index} className="relative group w-full">
                                            {/* Skill row */}
                                            <div className="flex justify-between items-center px-3 py-2 rounded-md transition-colors duration-100 hover:bg-gray-400 dark:hover:bg-muted/30">
                                                <span className="font-semibold text-foreground">{item.name}</span>
                                                <span className="text-sm text-muted-foreground">{item.level}/10</span>
                                            </div>

                                            {/* Hoverable project box */}
                                            <div className="hidden group-hover:flex absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-muted p-3 rounded-md shadow-lg z-30">
                                                <ul className="space-y-1">
                                                    <h1 className="text-base font-bold mb-1 text-primary">Projects</h1>
                                                    {item.projects.map((proj) => (
                                                        <li key={proj} className="text-sm text-muted-foreground">
                                                            {proj}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/90 text-background"
                                        onClick={onClose}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}