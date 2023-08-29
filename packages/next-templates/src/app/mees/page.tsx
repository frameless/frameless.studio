'use client';
import {
  ButtonGroup,
  ButtonLink,
  Heading1,
  Heading2,
  Link,
  Page,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import { UtrechtIconArrow } from '@utrecht/web-component-library-react';

// import Image from 'next/image';
// import styles from './page.module.css';

export default function Home() {
  return (
    <Page>
      <Heading1>Meldpunt voor Verdwaalde Sokken</Heading1>
      <Paragraph lead>
        Het &ldquo;Meldpunt voor Verdwaalde Sokken,&ldquo; is een initiatief van onze gemeente met als doel de
        hereniging van verloren sokken te faciliteren. Sokken, hoewel vaak als alledaags beschouwd, hebben een speciale
        plaats in onze garderobes en ons dagelijks leven. Het verlies van een sok kan zowel een praktisch als emotioneel
        gemis veroorzaken. Met dit programma streven wij ernaar deze waardevolle kledingstukken hun weg naar huis terug
        te laten vinden.
      </Paragraph>
      <UnorderedList>
        <UnorderedListItem>
          Let op: dit meldpunt onderscheidt zich van een algemeen &ldquo;gevonden voorwerpen&ldquo; meldpunt. Hier
          richten wij ons uitsluitend op het melden van verloren sokken. Voor informatie over gevonden voorwerpen,
          verwijzen wij u graag naar onze sectie &ldquo;Gevonden voorwerpen.&ldquo;
        </UnorderedListItem>
      </UnorderedList>
      <Paragraph>
        <Link href="https://www.utrecht.nl/wonen-en-leven/gevonden-voorwerpen/">
          <UtrechtIconArrow></UtrechtIconArrow>Meer over gevonden voorwerpen
        </Link>
      </Paragraph>
      <ButtonGroup>
        <ButtonLink appearance="primary-action-button" href="form-gevonden">
          Meld je gevonden sok<UtrechtIconArrow></UtrechtIconArrow>
        </ButtonLink>
        <ButtonLink appearance="primary-action-button" href="form-kwijt">
          Meld je verloren sok <UtrechtIconArrow></UtrechtIconArrow>
        </ButtonLink>
      </ButtonGroup>
      <Heading2>Hoe werkt het?</Heading2>
      <UnorderedList>
        <UnorderedListItem>
          Wanneer u merkt dat een van uw sokken zijn partner mist, nodigen wij u uit om dit aan ons kenbaar te maken via
          ons eenvoudige online formulier. Hier vragen wij u om een gedetailleerde beschrijving van de sok, inclusief
          kleur, patroon en eventuele unieke kenmerken.
        </UnorderedListItem>
        <UnorderedListItem>
          Ons toegewijde team van sokkenherenigingsexperts zal zich bezighouden met het matchen van de verloren sok met
          andere eenzame sokken in onze inventaris. Ons doel is om de lang verloren vrienden weer te herenigen.
        </UnorderedListItem>
        <UnorderedListItem>
          Zodra uw sok zijn vermiste partner vindt, ontvangt u een officiële melding van hereniging. U kunt dan een
          afspraak maken om uw sokken persoonlijk op te halen en ze weer te herenigen.
        </UnorderedListItem>
        <UnorderedListItem>
          Voor sokken die hun partners niet kunnen vinden, bieden wij een speciaal sokkenadoptieprogramma aan. Hiermee
          kunnen eenzame sokken een nieuwe thuis vinden, zelfs als dat betekent dat ze met een andere sok moeten worden
          gecombineerd.
        </UnorderedListItem>
      </UnorderedList>

      <Heading2>Waarom Het Meldpunt voor Verdwaalde Sokken?</Heading2>
      <Paragraph>
        Dit programma benadrukt het belang van sokken in ons dagelijks leven, geeft hen de erkenning die ze verdienen en
        minimaliseert zo het verlies van sokken, wat bijdraagt aan het milieubewustzijn door de hoeveelheid textielafval
        te verminderen,Eveneens bevordert het &ldquo;Meldpunt voor Verdwaalde Sokken&ldquo; de betrokkenheid van de
        gemeenschap en moedigt het de deelname aan een positieve en vermakelijke inspanning aan.
      </Paragraph>
    </Page>
  );
}