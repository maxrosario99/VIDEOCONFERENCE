import Image from 'next/image'
import React from 'react'
import HomeCard from './ui/HomeCard'
import { useRouter } from 'next/router'
import MeetingModal from './ui/MeetingModal'
import { useState } from 'react'

const MeetingTypeList = () => {
  const router = useRouter
  const [meetingState, setMeetingState] = 
  useState<"isScheduleMeeting" | "isJoiningMeeting" | 
  "isInstantMeeting" | undefined>()

  const createMeeting = () => {
    
  }
  return (
    <section className="grid grid-cols-1 gap-5
    md:grid-cols-2 xl:grid-cols-4" >
        <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant Meeting"
        handleClick={() => setMeetingState
          ("isJoiningMeeting")
        }
        className="bg-orange-1"

        />
        <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your Meeting"
        handleClick={() => setMeetingState
          ("isScheduleMeeting")
        }
        className="bg-blue-1"
        />
        <HomeCard
        img="/icons/add-recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => router.push("/recordings")
          ("isJoiningMeeting")
        }
        className="bg-purple-1"
        />
        <HomeCard
        img="/icons/join-meeting.svg"
        title="join Meeting"
        description="via Invitation link"
        handleClick={() => setMeetingState
          ("isJoiningMeeting")
        }
        className="bg-yellow-1"
        />
        <MeetingModal 
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
        />
    </section>

  )
}

export default MeetingTypeList