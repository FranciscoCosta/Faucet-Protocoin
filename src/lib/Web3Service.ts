import { toast } from 'react-toastify';
import Web3 from 'web3';
import ABI from './abi.json'



export async function mint() {

    if((!window as any).ethereum) {
        toast.error('Please install Metamask to mint ProtoCoins');
        throw new Error('Metamask not installed');
    }else{
        const web3 = new Web3((window as any).ethereum);
        const accounts = await web3.eth.getAccounts();
        if(accounts.length === 0){
            toast.error('No accounts found, please connect Metamask');
            throw new Error('No accounts found');
        }else{
            const contract = new web3.eth.Contract(ABI, process.env.NEXT_PUBLIC_CONTRACT_ADDRESS , {
                from: accounts[0]
            });
            try{
                const tx = await contract.methods.mint().send({from: accounts[0]});
                toast.success('ProtoCoins minted successfully',{
                    autoClose: false
                });
                return tx;
            }catch(error){
                toast.error('Error while minting ProtoCoins');
                throw new Error('Error while minting ProtoCoins');
            }
           
        }
        
    }
        
}