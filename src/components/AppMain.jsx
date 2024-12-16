import { useState } from 'react';
import languages from '../data/languages'
import AppCard from './AppCard';
import AppButton from './AppButtons';

function AppMain() {
    const [activeCard, setIsShown] = useState(null);

    return (
        <main className="main">
            <div className='pt-4'>
                {/* Buttons */}
                {languages.map(curLanguage => <AppButton
                    key={curLanguage.id}
                    title={curLanguage.title}
                    colorClass={(activeCard === curLanguage.id) ? "btn-warning" : "btn-primary"}
                    onToggle={() => setIsShown(curLanguage.id)} />)}
                {/* Cards */}
                {!activeCard ? <div className='card mt-4 p-2'>Nessun linguaggio selezionato</div> :
                (languages.map(curLanguage => (activeCard === curLanguage.id) && <AppCard
                    key={curLanguage.id}
                    title={curLanguage.title}
                    description={curLanguage.description} />
                ))}
            </div>
        </main>
    )
}

export default AppMain;