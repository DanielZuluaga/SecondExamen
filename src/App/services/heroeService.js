import heroes from '../../assets/data/heroes'
import SecondExam from '../components/SecondExam/SecondExam'

export const heroeService ={
    getHeroes
}

function getHeroes(){
    return heroes;
}

export default heroeService;