import { toast } from 'react-toastify';
import Web3 from 'web3';
import axios from 'axios';

export async function mint() {

    if((!window as any).ethereum) {
        toast.error('Please install Metamask to mint ProtoCoins');
        throw new Error('Metamask not installed');
    }else{
        const web3 = new Web3((window as any).ethereum);
        const accounts = await web3.eth.requestAccounts();
        if(accounts.length === 0){
            toast.error('No accounts found, please connect Metamask');
            throw new Error('No accounts found');
        }else{
            try{
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/mint/${accounts[0]}`);
                return response.data;
            }catch(error : any){
                console.log(error);
                toast.error(error.message);
                throw new Error('Error while minting ProtoCoins');
            }
           
        }
        
    }
        
}