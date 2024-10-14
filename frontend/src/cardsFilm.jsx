import  {RomanceFilm} from './RomanceFilm';
import  {DramaFilm} from './DramaFilm';
import  {ActionFilm} from './ActionFilm';
import { AnimeFilm } from "./AnimeFilm"
import {AdventureFilm} from "./AdventureFilm"
import {ComedyFilm} from "./ComdeyFilm"
import {HistoricalFilm} from "./HistoricalFilm"
export function CardsFilm() {

  return (
    <>
    <DramaFilm/>
    <AnimeFilm/>
    <ActionFilm/>
    <AdventureFilm/>
    <RomanceFilm/>
    <ComedyFilm/>
    <HistoricalFilm/>
    </>
  );
}
