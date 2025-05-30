import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JournalScreen } from './components/JournalScreen'
import { ProfileScreen } from './components/ProfileScreen'
import { SettingsScreen } from './components/SettingsScreen'
import { Navigation } from './components/Navigation'
import { Drawer } from './components/Drawer'
import { Bars3Icon } from '@heroicons/react/24/outline'

function App() {
  const [journalEntries, setJournalEntries] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addJournalEntry = (entry) => {
    setJournalEntries([...journalEntries, entry])
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router basename={'/forela-app-vite'}>
      <div className="relative flex flex-col min-h-screen bg-background-beige">
        {/* Header/Top Bar with Hamburger Menu */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <h1 className="text-xl font-display font-semibold text-text-primary">Forela</h1>
          <button onClick={toggleDrawer} className="p-2 rounded-full hover:bg-gray-100">
            <Bars3Icon className="w-6 h-6 text-gray-600" />
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/journal" element={<JournalScreen entries={journalEntries} addJournalEntry={addJournalEntry} />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="/care-plan" element={<div>Care Plan Screen Placeholder</div>} />
            <Route path="/labs" element={<div>Labs Screen Placeholder</div>} />
            <Route path="/help" element={<div>Help Screen Placeholder</div>} />
            <Route path="/refer-a-friend" element={<div>Refer a Friend Screen Placeholder</div>} />
            <Route path="/companion" element={<div>Companion Screen Placeholder</div>} />
            <Route path="/symptoms" element={<div>Symptoms Screen Placeholder</div>} />
            <Route path="/trends" element={<div>Trends Screen Placeholder</div>} />
            <Route path="/reports" element={<div>Reports Screen Placeholder</div>} />
            <Route path="/medical-history" element={<div>Medical History Screen Placeholder</div>} />
            <Route path="/integrations" element={<div>Integrations Screen Placeholder</div>} />
            <Route path="/menu-scan" element={<div>Menu Scan Screen Placeholder</div>} />
            <Route path="/" element={<JournalScreen entries={journalEntries} addJournalEntry={addJournalEntry} />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>

        <Navigation />

        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />

      </div>
    </Router>
  );
}

export default App;
