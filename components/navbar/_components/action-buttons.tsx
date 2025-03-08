"use client"
import React,{useState} from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"

const ActionButton = () => {
  return (
      <div className="pr-2">
          <div className="items-center justify-center flex">
              <div className="flex xl:space-x-4">
                  <Link href="/contact-sales"></Link>
              </div>
          </div>
    </div>
  )
}

export default ActionButton