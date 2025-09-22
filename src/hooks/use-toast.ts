// Simple toast utility for Bootstrap
export const toast = ({ title, description }: { title: string; description: string }) => {
  console.log(`Toast: ${title} - ${description}`);
  // In a real implementation, you could use react-hot-toast or similar
  alert(`${title}: ${description}`);
};

export const useToast = () => ({
  toast
});