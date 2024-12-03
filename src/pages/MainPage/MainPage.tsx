import './styles.scss';
import {RoomTypes} from "../../common/types/RoomTypes.ts";
import {LayoutDefault} from "@app/layout";

export interface RoomArea {
  type: RoomTypes,
  area: number | null
}

export interface SmetaFormData {
  renovationType: string,
  city: string,
  residentialComplex: string,
  area: number | null,
  ceilingHeight: number | null,
  rooms: RoomTypes[],
  roomAreas: RoomArea[]
}

const smetaDefaultForm: SmetaFormData = {
  renovationType: '',
  city: '',
  residentialComplex: '',
  area: null,
  ceilingHeight: null,
  rooms: [],
  roomAreas: []
}

export interface CompaniesFormData {
  city: string;
  residentialComplex: string;
  area: number | null;
  ceilingHeight: number | null;
}

const companiesDefaultForm: CompaniesFormData = {
  city: "",
  residentialComplex: "",
  area: null,
  ceilingHeight: null,
}

function MainPage() {

  return (
    <LayoutDefault>
      {/*<h1>KVADRED</h1>*/}
    </LayoutDefault>
  )
}

export default MainPage;
