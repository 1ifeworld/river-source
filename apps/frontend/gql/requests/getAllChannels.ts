import sdk from '../client';

export async function getAllChannels() {
    const { channels } = await sdk.allChannels();
  
    const channelsWithImage = channels.filter(
      (channel) => channel?.contractUri?.image && channel.contractUri.image.trim() !== ''
    );
  
    return {
      channels: channelsWithImage,
    };
  }