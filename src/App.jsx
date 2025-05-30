import React, { useState, useEffect, createContext } from 'react';
import {
    ChevronDown, ChevronUp, RefreshCw, X, Home, Edit3, Smile, Moon, Utensils, Bike,
    CheckSquare, Square, Mic, Type, Search, Menu as MenuIcon, BookOpen, MessageCircleQuestion,
    Handshake, Send, Save, MicOff, Trash2, Plus, BarChart2, Info, Lightbulb, Heart, Activity, TrendingUp, Clock,
    Settings as SettingsIcon, Bell, MessageSquare as MessageSquareIcon, Smartphone, CheckCircle, User, Download,
    Frown, Meh, Smile as SmileIconLucide, Laugh, Annoyed, PlusCircle, MessageSquarePlus, ChevronRight, Target, FolderHeart 
} from 'lucide-react';
import {
    ChevronLeft, ChevronRight as ChevronRightIcon,
    Home as HomeIcon,
    MessageSquare as MessageSquareIconOld,
    Settings as SettingsIconOld,
    User as UserIcon,
    X as CloseIcon
} from 'lucide-react';
import './App.css'
import { initialPennyUserData, pennyTomorrowScheduleData, pennyPersonalizedCareIntroTomorrow, pennyJournalPromptTomorrow, defaultBottomNavItems, allSelectableNavItems } from './data/pennyData';
import { pennyJournalEntriesData } from './data/journalEntries';
import { initialAppSettings } from './data/userPreferences';
import { initialChatSessionsData } from './data/chatSessions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { JournalScreen } from './components/JournalScreen'
import { ProfileScreen } from './components/ProfileScreen'
import { SettingsScreen } from './components/SettingsScreen'
import { Navigation } from './components/Navigation'
import { Drawer } from './components/Drawer'
import { Bars3Icon } from '@heroicons/react/24/outline'

const AppContext = createContext();

function App() {
  const [currentScreen, setCurrentScreen] = useState('journal')
  const [journalEntries, setJournalEntries] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [view, setView] = useState('today');
  const [currentSchedule, setCurrentSchedule] = useState(initialPennyUserData.scheduleToday);
  const [pageTitle, setPageTitle] = useState("Today's Personalized Care");
  const [personalizedCareIntro, setPersonalizedCareIntro] = useState(initialPennyUserData.personalizedCareIntroToday);
  const [journalPrompt, setJournalPrompt] = useState(initialPennyUserData.journalPromptToday);
  const [showJournalButton, setShowJournalButton] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [allJournalEntries, setAllJournalEntries] = useState(pennyJournalEntriesData.sort((a,b) => new Date(b.date) - new Date(a.date)));
  const [lessonOfTheDay, setLessonOfTheDay] = useState(initialPennyUserData.lessonOfTheDay);
  const [userProfile, setUserProfile] = useState({ firstName: initialPennyUserData.firstName, lastName: initialPennyUserData.lastName, middleName: initialPennyUserData.middleName, email: initialPennyUserData.email, dob: initialPennyUserData.dob, });
  const [appSettings, setAppSettings] = useState(initialAppSettings);
  
  const [allChatSessions, setAllChatSessions] = useState(initialChatSessionsData.sort((a,b) => new Date(b.startTime) - new Date(a.startTime)));
  const [currentChatSessionId, setCurrentChatSessionId] = useState(allChatSessions.length > 0 ? allChatSessions[0].id : null);

  const [bottomNavConfig, setBottomNavConfig] = useState( defaultBottomNavItems.map(item => { const fullItem = allSelectableNavItems.find(selectable => selectable.viewId === item.viewId); return { id: fullItem.id, label: fullItem.label, icon: fullItem.navIcon, action: () => navigateTo(fullItem.viewId), viewId: fullItem.viewId }; }) );
  const [selectedBottomNavIds, setSelectedBottomNavIds] = useState(defaultBottomNavItems.map(item => item.viewId));
  const [isEditingNav, setIsEditingNav] = useState(false);

  useEffect(() => { const hour = new Date().getHours(); if (hour < 12) setGreeting('Good morning'); else if (hour < 17) setGreeting('Good afternoon'); else setGreeting('Good evening'); }, []);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  
  const navigateTo = (targetView) => { setView(targetView); setIsDrawerOpen(false); if (targetView === 'today') { setCurrentSchedule(initialPennyUserData.scheduleToday); setPageTitle("Today's Care"); setPersonalizedCareIntro(initialPennyUserData.personalizedCareIntroToday); setJournalPrompt(initialPennyUserData.journalPromptToday); setLessonOfTheDay(initialPennyUserData.lessonOfTheDay); setShowJournalButton(true); } else if (targetView === 'tomorrow') { setCurrentSchedule(pennyTomorrowScheduleData); setPageTitle("Tomorrow's Care"); setPersonalizedCareIntro(pennyPersonalizedCareIntroTomorrow); setJournalPrompt(pennyJournalPromptTomorrow); setLessonOfTheDay(null); setShowJournalButton(false); } else { const navItem = allSelectableNavItems.find(item => item.viewId === targetView); setPageTitle(navItem ? navItem.label : targetView.charAt(0).toUpperCase() + targetView.slice(1)); setPersonalizedCareIntro(''); setJournalPrompt(''); setLessonOfTheDay(null); setShowJournalButton(false); } };
  const toggleBottomNavItem = (viewIdToToggle) => { setSelectedBottomNavIds(prevSelectedIds => { let newSelectedIds = [...prevSelectedIds]; const existingIndex = newSelectedIds.indexOf(viewIdToToggle); if (existingIndex > -1) { newSelectedIds.splice(existingIndex, 1); } else { if (newSelectedIds.length < 3) { newSelectedIds.push(viewIdToToggle); } else { console.warn("Max 3 bottom nav items."); return prevSelectedIds; }} const newConfig = newSelectedIds.map(sId => { const fullItem = allSelectableNavItems.find(item => item.viewId === sId); return { id: fullItem.id, label: fullItem.label, icon: fullItem.navIcon, action: () => navigateTo(fullItem.viewId), viewId: fullItem.viewId }; }); setBottomNavConfig(newConfig); return newSelectedIds; }); };
  const setBottomNavItemsOrderAndUpdateIds = (newOrderedItems) => { setBottomNavConfig(newOrderedItems); const newSelectedIds = newOrderedItems.map(item => item.viewId); setSelectedBottomNavIds(newSelectedIds); };
  const handleDashboardViewToggle = () => { if (view === 'today') navigateTo('tomorrow'); else navigateTo('today'); };
  const updateActivityCompletion = (targetViewForData, sectionKey, itemId) => { let ref = targetViewForData === 'today' ? initialPennyUserData.scheduleToday : pennyTomorrowScheduleData; const items = ref[sectionKey].items.map(i => i.id === itemId ? { ...i, completed: !i.completed } : i ); const sec = { ...ref[sectionKey], items }; const newSched = { ...ref, [sectionKey]: sec }; if (targetViewForData === 'today') initialPennyUserData.scheduleToday = newSched; else pennyTomorrowScheduleData[sectionKey] = sec; if (view === targetViewForData) setCurrentSchedule(newSched); };
  const appReplaceActivity = (targetViewForData, sectionKey, oldItemId, newItemData) => { let ref = targetViewForData === 'today' ? initialPennyUserData.scheduleToday : pennyTomorrowScheduleData; const items = ref[sectionKey].items.map(i => i.id === oldItemId ? { ...newItemData, id: oldItemId } : i ); const sec = { ...ref[sectionKey], items }; const newSched = { ...ref, [sectionKey]: sec }; if (targetViewForData === 'today') initialPennyUserData.scheduleToday = newSched; else pennyTomorrowScheduleData[sectionKey] = sec; if (view === targetViewForData) setCurrentSchedule(newSched);};
  const addJournalEntry = (newEntry) => { setAllJournalEntries(prev => [newEntry, ...prev].sort((a,b) => new Date(b.date) - new Date(a.date))); };
  const updateUserProfileState = (newProfile) => { setUserProfile(newProfile); initialPennyUserData.firstName = newProfile.firstName; initialPennyUserData.lastName = newProfile.lastName; initialPennyUserData.middleName = newProfile.middleName; initialPennyUserData.email = newProfile.email; initialPennyUserData.dob = newProfile.dob; };
  const updateAppSettingState = (settingKey, value) => { setAppSettings(prev => ({ ...prev, [settingKey]: value })); };

  // Companion Chat Functions
  const startNewChatSession = () => {
    const today = new Date().toDateString();
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toDateString();
    const todaysEntries = allJournalEntries.filter(e => new Date(e.date).toDateString() === today);
    const yesterdaysEntries = allJournalEntries.filter(e => new Date(e.date).toDateString() === yesterday);
    let introMessage = "Hi Penny, let's chat. ";
    if (todaysEntries.length > 0) { introMessage += `I saw your journal entry about "${todaysEntries[0].title}" from earlier today. `; } 
    else if (yesterdaysEntries.length > 0) { introMessage += `I saw your journal entry about "${yesterdaysEntries[0].title}" from yesterday. `; }
    const todaysCompletedActivities = initialPennyUserData.scheduleToday ? Object.values(initialPennyUserData.scheduleToday) .flatMap(cat => cat.items?.filter(item => item.completed).map(item => item.name) || []) .slice(0,2) : [];
    if(todaysCompletedActivities.length > 0) { introMessage += `Great job on completing ${todaysCompletedActivities.join(' and ')} today! `; }
    introMessage += "What's on your mind?";
    const newChatId = `chat${Date.now()}`;
    const newChatSession = { id: newChatId, title: `Chat started ${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`, startTime: Date.now(), durationMinutes: 0, messages: [{ id: `comp_intro_${Date.now()}`, sender: 'companion', text: introMessage }] };
    setAllChatSessions(prev => [newChatSession, ...prev].sort((a,b) => new Date(b.startTime) - new Date(a.startTime)));
    setCurrentChatSessionId(newChatId);
  };

  const addNewChatMessage = (chatId, message) => { setAllChatSessions(prevSessions => prevSessions.map(session => session.id === chatId ? { ...session, messages: [...session.messages, message], durationMinutes: Math.round((Date.now() - session.startTime) / 60000) } : session )); };
  const getScheduleForDate = (dateString) => { const entryDate = new Date(dateString).toDateString(); const todayDate = new Date().toDateString(); const tomorrowDate = new Date(new Date().setDate(new Date().getDate() + 1)).toDateString(); if (entryDate === todayDate) return initialPennyUserData.scheduleToday; if (entryDate === tomorrowDate) return pennyTomorrowScheduleData; return null; };
  const getChatsForDate = (dateString) => { const entryDate = new Date(dateString).toDateString(); return allChatSessions.filter(chat => new Date(chat.startTime).toDateString() === entryDate); };

  useEffect(() => { /* Tailwind config */ const head = document.head; const ids = ['forela-tailwind-config','forela-fonts','custom-scrollbar-style']; ids.forEach(id => { let el=document.getElementById(id); if(el)head.removeChild(el);}); const tw = document.createElement('script'); tw.id='forela-tailwind-config'; tw.text=`tailwind.config={theme:{extend:{colors:{brown:{50:'#FBF9F7',100:'#F5F1ED',200:'#EAE2DA',300:'#DED4CA',400:'#C4B2A6',600:'#6F5E53',700:'#54453B',800:'#3E322B'},forelaPink:'#D99C8F',forelaPinkLight:'#F6EAE7',forelaPinkText:'#8C5A51',forelaOrange:'#A36456',forelaOrangeLight:'#F0E2DF',forelaOrangeText:'#6D443A',forelaDarkBlue:'#082026',forelaDarkBlueLight:'#E6E8E9',forelaDarkBlueText:'#FFFFFF',forelaLightBlue:'#1E6E8B',forelaLightBlueLight:'#DAEBF0',forelaLightBlueText:'#104457',beigeTooltipBg:'#EAE9E5',forelaNavText:'#311D00',forelaHighlightBlue:'#1f6d8c'},fontFamily:{sans:['Inter','sans-serif'],serif:['Playfair Display','serif']},animation:{pulseSlow:'pulseSlow 2s cubic-bezier(0.4,0,0.6,1) infinite',recordSpin:'recordSpin 2s linear infinite'},keyframes:{pulseSlow:{'0%,100%':{opacity:1,transform:'scale(1)'},'50%':{opacity:0.7,transform:'scale(1.05)'}},recordSpin:{from:{transform:'rotate(0deg)'},to:{transform:'rotate(360deg)'}}}}}}`; const ff = document.createElement('link'); ff.id='forela-fonts'; ff.href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"; ff.rel="stylesheet"; const ss = document.createElement("style"); ss.id="custom-scrollbar-style"; ss.innerText=`.custom-scrollbar::-webkit-scrollbar{width:8px;}.custom-scrollbar::-webkit-scrollbar-track{background:#F5F1ED;border-radius:10px;}.custom-scrollbar::-webkit-scrollbar-thumb{background:#DED4CA;border-radius:10px;}.custom-scrollbar::-webkit-scrollbar-thumb:hover{background:#C4B2A6;}`; head.appendChild(tw); head.appendChild(ff); head.appendChild(ss); }, []);

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen)
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
            {/* Add routes for other drawer items here */}
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
            {/* Default route */}
            <Route path="*" element={<JournalScreen entries={journalEntries} addJournalEntry={addJournalEntry} />} />
          </Routes>
        </main>

        {/* Bottom Navigation Bar */}
        <Navigation currentScreen={currentScreen} onScreenChange={handleScreenChange} />

        {/* Drawer Component */}
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />

      </div>
    </Router>
  );
}

export default App;
