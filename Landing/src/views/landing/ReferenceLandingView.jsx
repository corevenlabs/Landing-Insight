import HeroSection from '../../components/sections/HeroSection';
import TickerStrip from '../../components/sections/TickerStrip';
import BenefitsSection from '../../components/sections/BenefitsSection';
import StatementSection from '../../components/sections/StatementSection';
import AppSection from '../../components/sections/AppSection';
import HowItWorksSection from '../../components/sections/HowItWorksSection';
import YorkiSection from '../../components/sections/YorkiSection';
import MembershipSection from '../../components/sections/MembershipSection';
import CommunitySection from '../../components/sections/CommunitySection';
import FaqSection from '../../components/sections/FaqSection';
import ClosingSection from '../../components/sections/ClosingSection';
import SiteHeader from '../../components/layout/SiteHeader';
import SiteFooter from '../../components/layout/SiteFooter';
import PageExtras from '../../components/layout/PageExtras';

export default function ReferenceLandingView() {
 return <>
<SiteHeader />
<main id="main">
<HeroSection />
<TickerStrip />
<BenefitsSection />
<StatementSection />
<AppSection />
<HowItWorksSection />
<YorkiSection />
<MembershipSection />
<CommunitySection />
<FaqSection />
<ClosingSection />
</main>
<SiteFooter /><PageExtras />
</>;
}
