<?php namespace pineapple;

class LEDConfigurator extends Module
{
    public function route()
    {
        switch ($this->request->action) {
            case 'getDeviceType':
                $this->getDeviceType();
                break;
            case 'getNanoLEDInfo':
                $this->getNanoLEDInfo();
                break;
            case 'getTetraBlueLEDInfo':
                $this->getTetraBlueLEDInfo();
                break;
            case 'getTetraYellowLEDInfo':
                $this->getTetraYellowLEDInfo();
                break;
            case 'getTetraRedLEDInfo':
                $this->getTetraRedLEDInfo();
                break;
        }
    } 

    private function getDeviceType()
    {
        $device = 'tetra';

        if ($device == 'tetra'){
            $this->response = 'tetra';
        }
        elseif ($device == 'nano') {
            $this->response = 'nano';
        }
    }

    private function getTetraYellowLEDInfo()
    {
        $trigger = $this->uciGet('system.@led[2].trigger');

        if ($trigger == 'none') {
            $this->response = array('enabled' => false, 'trigger' => $trigger);
        } elseif ($trigger == 'netdev'){
            $mode = $this->uciGet('system.@led[2].mode');
            $interface = $this->uciGet('system.@led[2].dev');
            if ($mode == 'link tx rx') {
                $this->response = array('enabled' => true, 'trigger' => $trigger, 'mode' => 'txrx', 'interface' => $interface);
            } elseif ($mode == 'link tx') {
                $this->response = array('enabled' => true, 'trigger' => $trigger, 'mode' => 'tx', 'interface' => $interface);
            } elseif ($mode == 'link rx') {
                $this->response = array('enabled' => true, 'trigger' => $trigger, 'mode' => 'rx', 'interface' => $interface);
            }
        } elseif ($trigger == 'timer') {
            $timeon = $this->uciGet('system.@led[2].delayon');
            $timeoff = $this->uciGet('system.@led[2].delayoff');
            $this->response = array('enabled' => true, 'trigger' => $trigger, 'timeon' => $timeon, 'timeoff' => $timeoff);
        } else {
            $this->response = array('enabled' => true, 'trigger' => $trigger);
        }
    }

    private function getTetraBlueLEDInfo()
    {
        $trigger = $this->uciGet('system.@led[0].trigger');

        if ($trigger == 'none') {
            $this->response = array('enabled' => false, 'trigger' => $trigger);
        } elseif ($trigger == 'netdev'){
            $mode = $this->uciGet('system.@led[0].mode');
            $interface = $this->uciGet('system.@led[0].dev');
            if ($mode == 'link tx rx') {
                $this->response = array('enabled' => true, 'trigger' => $trigger, 'mode' => 'txrx', 'interface' => $interface);
            } elseif ($mode == 'link tx') {
                $this->response = array('enabled' => true, 'trigger' => $trigger, 'mode' => 'tx', 'interface' => $interface);
            } elseif ($mode == 'link rx') {
                $this->response = array('enabled' => true, 'trigger' => $trigger, 'mode' => 'rx', 'interface' => $interface);
            }
        } elseif ($trigger == 'timer') {
            $timeon = $this->uciGet('system.@led[0].delayon');
            $timeoff = $this->uciGet('system.@led[0].delayoff');
            $this->response = array('enabled' => true, 'trigger' => $trigger, 'timeon' => $timeon, 'timeoff' => $timeoff);
        } else {
            $this->response = array('enabled' => true, 'trigger' => $trigger);
        }
    }

    private function getTetraRedLEDInfo()
        {
        $trigger = $this->uciGet('system.@led[1].trigger');

        if ($trigger == 'none') {
            $this->response = array('enabled' => false, 'trigger' => $trigger);
        } elseif ($trigger == 'netdev'){
            $mode = $this->uciGet('system.@led[1].mode');
            $interface = $this->uciGet('system.@led[1].dev');
            if ($mode == 'link tx rx') {
                $this->response = array('enabled' => true, 'trigger' => $trigger, 'mode' => 'txrx', 'interface' => $interface);
            } elseif ($mode == 'link tx') {
                $this->response = array('enabled' => true, 'trigger' => $trigger, 'mode' => 'tx', 'interface' => $interface);
            } elseif ($mode == 'link rx') {
                $this->response = array('enabled' => true, 'trigger' => $trigger, 'mode' => 'rx', 'interface' => $interface);
            }
        } elseif ($trigger == 'timer') {
            $timeon = $this->uciGet('system.@led[1].delayon');
            $timeoff = $this->uciGet('system.@led[1].delayoff');
            $this->response = array('enabled' => true, 'trigger' => $trigger, 'timeon' => $timeon, 'timeoff' => $timeoff);
        } else {
            $this->response = array('enabled' => true, 'trigger' => $trigger);
        }
    }

    private function getNanoLEDInfo()
    {
        $trigger = $this->uciGet('system.@led[0].trigger');

        if ($trigger == 'none') {
            $this->response = array('enabled' => false, 'trigger' => $trigger);
        } else {
            $this->response = array('enabled' => true, 'trigger' => $trigger);
        }
    }
}