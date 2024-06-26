import { toast } from 'react-toastify';

export async function mint() {

    if((!window as any).ethereum) {
        toast.error('Please install Metamask to mint ProtoCoins');
        return;
    }else{
        toast.success('Metamask installed');    
    }
        
}